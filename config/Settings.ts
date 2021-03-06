import {
	ISetting,
	ISettingSelectValue,
	SettingType,
} from '@rocket.chat/apps-engine/definition/settings';

export enum AppSetting {
	DialogflowBotUsername = 'dialogflow_bot_username',
	DialogflowProjectId = 'dialogflow_project_id',
	DialogflowEnvironment = 'dialogflow_environment',
	DialogflowClientEmail = 'dialogflow_client_email',
	DialogFlowPrivateKey = 'dialogflow_private_key',
	DialogflowFallbackResponsesLimit = 'dialogflow_fallback_responses_limit',
	FallbackTargetDepartment = 'fallback_target_department',
	DialogflowHandoverMessage = 'dialogflow_handover_message',
	DialogflowServiceUnavailableMessage = 'dialogflow_service_unavailable_message',
	DialogflowHandoverFailedMessage = 'dialogflow_no_agents_online_for_handover',
	DialogflowCloseChatMessage = 'dialogflow_close_chat_message',
	DialogflowHideQuickReplies = 'dialogflow_hide_quick_replies',
    DialogflowDefaultLanguage = 'dialogflow_default_language',
}

export enum ServerSetting {
	SITE_URL = 'Site_Url',
}

export enum DefaultMessage {
	DEFAULT_DialogflowServiceUnavailableMessage = `Sorry, I'm having trouble answering your question.`,
	DEFAULT_DialogflowRequestFailedMessage = 'Sorry, something went wrong.',
	DEFAULT_DialogflowHandoverMessage = 'Transferring to an online agent',
	DEFAULT_DialogflowCloseChatMessage = 'Closing the chat, Goodbye',
}

export const LanguageCode: Array<ISettingSelectValue> = [
    { key: 'zh-CN', i18nLabel: 'Chinese - Simplified' },
    { key: 'da', i18nLabel: 'Danish' },
    { key: 'nl', i18nLabel: 'Dutch' },
    { key: 'en', i18nLabel: 'English' },
    { key: 'en-AU', i18nLabel: 'English - Australia' },
    { key: 'en-CA', i18nLabel: 'English - Canada' },
    { key: 'en-GB', i18nLabel: 'English - Great Britain' },
    { key: 'en-IN', i18nLabel: 'English - India' },
    { key: 'en-US', i18nLabel: 'English - US' },
    { key: 'fr-CA', i18nLabel: 'French - Canada' },
    { key: 'fr-FR', i18nLabel: 'French - France' },
    { key: 'de', i18nLabel: 'German' },
    { key: 'hi', i18nLabel: 'Hindi' },
    { key: 'id', i18nLabel: 'Indonesian' },
    { key: 'it', i18nLabel: 'Italian' },
    { key: 'ja', i18nLabel: 'Japanese' },
    { key: 'ko', i18nLabel: 'Korean' },
    { key: 'no', i18nLabel: 'Norwegian' },
    { key: 'pl', i18nLabel: 'Polish' },
    { key: 'pt-BR', i18nLabel: 'Portuguese - Brazil' },
    { key: 'pt', i18nLabel: 'Portuguese - Portugal' },
    { key: 'ru', i18nLabel: 'Russian' },
    { key: 'es', i18nLabel: 'Spanish' },
    { key: 'es-ES', i18nLabel: 'Spanish - Spain' },
    { key: 'sv', i18nLabel: 'Swedish' },
    { key: 'tr', i18nLabel: 'Turkish' },
    { key: 'uk', i18nLabel: 'Ukrainian' },
];

export const settings: Array<ISetting> = [
	{
		id: AppSetting.DialogflowBotUsername,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'bot_username',
		required: true,
	},
	{
		id: AppSetting.DialogflowProjectId,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'dialogflow_project_id',
		required: true,
	},
	{
		id: AppSetting.DialogflowEnvironment,
		public: true,
		type: SettingType.STRING,
		packageValue: 'draft',
		i18nLabel: 'dialogflow_environment',
		i18nDescription: 'dialogflow_environment_description',
		required: true,
	},
	{
		id: AppSetting.DialogflowClientEmail,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'dialogflow_client_email',
		required: true,
	},
	{
		id: AppSetting.DialogFlowPrivateKey,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'dialogflow_private_key',
		required: true,
	},
    {
        id: AppSetting.DialogflowDefaultLanguage,
        public: true,
        type: SettingType.SELECT,
        values: LanguageCode,
        packageValue: 'en',
        value: 'en',
        i18nLabel: 'dialogflow_default_language',
		i18nDescription: 'dialogflow_default_language_description',
		required: false,
    },
	{
		id: AppSetting.DialogflowFallbackResponsesLimit,
		public: true,
		type: SettingType.NUMBER,
		packageValue: 0,
		value: 0,
		i18nLabel: 'dialogflow_fallback_responses_limit',
		i18nDescription: 'dialogflow_fallback_responses_limit_description',
		required: false,
	},
	{
		id: AppSetting.FallbackTargetDepartment,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'target_department_for_handover',
		i18nDescription: 'target_department_for_handover_description',
		required: false,
	},
	{
		id: AppSetting.DialogflowHandoverMessage,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'dialogflow_handover_message',
		i18nDescription: 'dialogflow_handover_message_description',
		required: false,
	},
	{
		id: AppSetting.DialogflowHandoverFailedMessage,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'dialogflow_handover_failed_message',
		i18nDescription: 'dialogflow_handover_failed_message_description',
		required: false,
	},
	{
		id: AppSetting.DialogflowServiceUnavailableMessage,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'dialogflow_service_unavailable_message',
		i18nDescription: 'dialogflow_service_unavailable_message_description',
		required: false,
	},
	{
		id: AppSetting.DialogflowCloseChatMessage,
		public: true,
		type: SettingType.STRING,
		packageValue: '',
		i18nLabel: 'dialogflow_close_chat_message',
		i18nDescription: 'dialogflow_close_chat_message_description',
		required: false,
	},
	{
		id: AppSetting.DialogflowHideQuickReplies,
		public: true,
		type: SettingType.BOOLEAN,
		packageValue: true,
		value: true,
		i18nLabel: 'dialogflow_hide_quick_replies',
		i18nDescription: 'dialogflow_hide_quick_replies_description',
		required: false,
	},
];
