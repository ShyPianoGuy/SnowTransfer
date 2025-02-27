import Endpoints from "../Endpoints";

/**
 * Methods for interacting with invites
 */
class InviteMethods {
	public requestHandler: import("../RequestHandler");

	public static default = InviteMethods;

	/**
	 * Create a new Invite Method Handler
	 *
	 * Usually SnowTransfer creates a method handler for you, this is here for completion
	 *
	 * You can access the methods listed via `client.invite.method`, where `client` is an initialized SnowTransfer instance
	 * @param requestHandler request handler that calls the rest api
	 */
	public constructor(requestHandler: import("../RequestHandler")) {
		this.requestHandler = requestHandler;
	}

	/**
	 * Get the invite data on an invite id
	 * @param inviteId Id of the invite
	 * @param query Query params for additional metadata fields
	 * @returns [Invite Object](https://discord.com/developers/docs/resources/invite#invite-object)
	 *
	 * @example
	 * // Gets an invite with approximate_member_count and approximate_presence_count
	 * const client = new SnowTransfer("TOKEN")
	 * const invite = await client.invite.getInvite("inviteId", { with_counts: true })
	 */
	public async getInvite(inviteId: string, query?: { with_counts?: boolean; with_expiration?: boolean; guild_scheduled_event_id?: string; }): Promise<import("discord-typings").Invite> {
		return this.requestHandler.request(`${Endpoints.INVITES(inviteId)}${query ? Object.keys(query).map((v, index) => `${index === 0 ? "?" : "&"}${v}=${query[v]}`).join("") : ""}`, "get", "json");
	}

	/**
	 * Delete an invite
	 * @param inviteId
	 * @returns [Invite Object](https://discord.com/developers/docs/resources/invite#invite-object)
	 *
	 * | Permissions needed | Condition                                     |
	 * |--------------------|-----------------------------------------------|
	 * | MANAGE_CHANNELS    | for invite that belongs to a specific channel |
	 * | MANAGE_GUILD       | delete any invite guild wide                  |
	 *
	 * @example
	 * const client = new SnowTransfer("TOKEN")
	 * const invite = await client.invite.deleteInvite("inviteId")
	 */
	public async deleteInvite(inviteId: string): Promise<import("discord-typings").Invite> {
		return this.requestHandler.request(Endpoints.INVITES(inviteId), "delete", "json");
	}
}

export = InviteMethods;
