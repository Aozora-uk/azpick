import { DriveFile } from '@/models/entities/drive-file.js';
import { Note } from '@/models/entities/note';
import { User } from '@/models/entities/user.js';
import { Webhook } from '@/models/entities/webhook';
import { AbuseReportResolver } from '@/models/entities/abuse-report-resolver.js';
import { IActivity } from '@/remote/activitypub/type.js';
import httpSignature from '@peertube/http-signature';

export type DeliverJobData = {
	/** Actor */
	user: ThinUser;
	/** Activity */
	content: string;
	/** Digest header */
	digest: string;
	/** inbox URL to deliver */
	to: string;
};

export type InboxJobData = {
	activity: IActivity;
	signature: httpSignature.IParsedSignature;
};

export type DbJobData = DbUserJobData | DbUserImportJobData | DbUserDeleteJobData | DbAbuseReportJobData;

export type DbUserJobData = {
	user: ThinUser;
	excludeMuting: boolean;
	excludeInactive: boolean;
};

export type DbUserDeleteJobData = {
	user: ThinUser;
	soft?: boolean;
};

export type DbUserImportJobData = {
	user: ThinUser;
	fileId: DriveFile['id'];
};

export type DbAbuseReportJobData = AbuseReportResolver;

export type ObjectStorageJobData = ObjectStorageFileJobData | Record<string, unknown>;

export type ObjectStorageFileJobData = {
	key: string;
};

export type EmailJobData = {
	to: string;
	subject: string;
	html: string;
	text: string;
};

export type EndedPollNotificationJobData = {
	noteId: Note['id'];
};

export type WebhookDeliverJobData = {
	type: string;
	content: unknown;
	webhookId: Webhook['id'];
	userId: User['id'];
	to: string;
	secret: string;
	createdAt: number;
	eventId: string;
};

export type ThinUser = {
	id: User['id'];
};
