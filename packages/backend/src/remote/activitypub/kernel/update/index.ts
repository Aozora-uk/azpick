import { CacheableRemoteUser } from '@/models/entities/user.js';
import { getApType, IUpdate, isActor, isPost } from '../../type.js';
import { apLogger } from '../../logger.js';
import { updateQuestion } from '../../models/question.js';
import Resolver from '../../resolver.js';
import { updatePerson } from '../../models/person.js';
import updateNote from './note.js';

/**
 * Updateアクティビティを捌きます
 */
export default async (actor: CacheableRemoteUser, activity: IUpdate): Promise<string> => {
	if ('actor' in activity && actor.uri !== activity.actor) {
		return 'skip: invalid actor';
	}

	apLogger.debug('Update');

	const resolver = new Resolver();

	const object = await resolver.resolve(activity.object).catch(e => {
		apLogger.error(`Resolution failed: ${e}`);
		throw e;
	});

	if (isActor(object)) {
		await updatePerson(actor.uri!, resolver, object);
		return 'ok: Person updated';
	} else if (getApType(object) === 'Question') {
		await updateQuestion(object, resolver).catch(e => console.log(e));
		return 'ok: Question updated';
	} else if (isPost(object)) {
		return await updateNote(actor, object);
	} else {
		return `skip: Unknown type: ${getApType(object)}`;
	}
};
