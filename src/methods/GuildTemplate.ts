import Endpoints from "../Endpoints";

/**
 * Methods for interacting with Guild Templates
 */
class GuildTemplateMethods {
	public requestHandler: import("../RequestHandler");

	public static default = GuildTemplateMethods;

	/**
	 * Create a new Guild Template Method Handler
	 *
	 * Usually SnowTransfer creates a method handler for you, this is here for completion
	 *
	 * You can access the methods listed via `client.guildTemplate.method`, where `client` is an initialized SnowTransfer instance
	 * @param requestHandler request handler that calls the rest api
	 */
	public constructor(requestHandler: import("../RequestHandler")) {
		this.requestHandler = requestHandler;
	}

	/**
	 * Get a guild template by code
	 * @param code The code for the template
	 * @returns A [guild template](https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure)
	 *
	 * @example
	 * const client = new SnowTransfer("TOKEN")
	 * const template = await client.guildTemplate.getGuildTemplate("code")
	 */
	public getGuildTemplate(code: string): Promise<import("discord-typings").GuildTemplate> {
		return this.requestHandler.request(Endpoints.TEMPLATE(code), "get", "json");
	}

	/**
	 * Creates a guild from a template. If using a bot account, the bot can only be in < 10 guilds (guild create limitation)
	 * @param code The code of the template
	 * @param options Specific options for the new guild
	 * @returns A [guild](https://discord.com/developers/docs/resources/guild#guild-object-guild-structure)
	 *
	 * @example
	 * const client = new SnowTransfer("TOKEN")
	 * const guild = await client.guildTemplate.createGuildFromGuildTemplate("code", { name: "Cool guild" })
	 */
	public createGuildFromGuildTemplate(code: string, options: { name: string; icon?: string | null; }): Promise<import("discord-typings").Guild> {
		return this.requestHandler.request(Endpoints.TEMPLATE(code), "post", "json", options);
	}

	/**
	 * Gets all templates from a guild
	 * @param guildId The Id of the guild
	 * @returns An array of [guild templates](https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure)
	 *
	 * | Permissions needed | Condition |
	 * |--------------------|-----------|
	 * | MANAGE_GUILD       | always    |
	 *
	 * @example
	 * const client = new SnowTransfer("TOKEN")
	 * const templates = await client.guildTemplate.getGuildTemplates("guildId")
	 */
	public getGuildTemplates(guildId: string): Promise<Array<import("discord-typings").GuildTemplate>> {
		return this.requestHandler.request(Endpoints.GUILD_TEMPLATES(guildId), "get", "json");
	}

	/**
	 * Creates a template from the current state of the guild
	 * @param guildId The Id of the guild
	 * @param data Metadata for the template
	 * @returns A [guild tempalte](https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure)
	 *
	 * | Permissions needed | Condition |
	 * |--------------------|-----------|
	 * | MANAGE_GUILD       | always    |
	 *
	 * @example
	 * const client = new SnowTransfer("TOKEN")
	 * const template = await client.guildTemplate.createGuildTemplate("guildId", { name: "Cool guild template", description: "This is a cool guild template" })
	 */
	public createGuildTemplate(guildId: string, data: { name: string; description?: string | null; }): Promise<import("discord-typings").GuildTemplate> {
		return this.requestHandler.request(Endpoints.GUILD_TEMPLATES(guildId), "post", "json", data);
	}

	/**
	 * Updates a guild template to match the current state of the guild
	 * @param guildId The Id of the guild
	 * @param code The code of the template
	 * @returns A [guild template](https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure)
	 *
	 * | Permissions needed | Condition |
	 * |--------------------|-----------|
	 * | MANAGE_GUILD       | always    |
	 *
	 * @example
	 * const client = new SnowTransfer("TOKEN")
	 * const template = await client.guildTemplate.syncGuildTemplate("guildId", "code")
	 */
	public syncGuildTemplate(guildId: string, code: string): Promise<import("discord-typings").GuildTemplate> {
		return this.requestHandler.request(Endpoints.GUILD_TEMPLATE(guildId, code), "put", "json");
	}

	/**
	 * Updates a guild template's metadata
	 * @param guildId The Id of the guild
	 * @param code The code of the template
	 * @param data Metadata for the template
	 * @returns A [guild template](https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure)
	 *
	 * | Permissions needed | Condition |
	 * |--------------------|-----------|
	 * | MANAGE_GUILD       | always    |
	 *
	 * @example
	 * const client = new SnowTransfer("TOKEN")
	 * const template = await client.guildTemplate.modifyGuildTemplate("guildId", "code", { name: "Coolest guild template", description: "This is the coolest guild template hands down" })
	 */
	public modifyGuildTemplate(guildId: string, code: string, data: { name?: string; description?: string | null; }): Promise<import("discord-typings").GuildTemplate> {
		return this.requestHandler.request(Endpoints.GUILD_TEMPLATE(guildId, code), "patch", "json", data);
	}

	/**
	 * Deletes a template from a guild
	 * @param guildId The Id of the guild
	 * @param code The code of the template
	 * @returns A [guild template](https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure)
	 *
	 * | Permissions needed | Condition |
	 * |--------------------|-----------|
	 * | MANAGE_GUILD       | always    |
	 *
	 * @example
	 * const client = new SnowTransfer("TOKEN")
	 * const template = await client.guildTemplate.deleteGuildTemplate("guildId", "code")
	 */
	public deleteGuildTemplate(guildId: string, code: string): Promise<import("discord-typings").GuildTemplate> {
		return this.requestHandler.request(Endpoints.GUILD_TEMPLATE(guildId, code), "delete", "json");
	}
}

export = GuildTemplateMethods;
