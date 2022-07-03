import Endpoints from "../Endpoints";
import { TGatewayData, TOAuthApplication } from "../LibTypes";

/**
 * Methods for interacting with bot specific endpoints
 */
class BotMethods {
	public requestHandler: import("../RequestHandler");

	public static default = BotMethods;

	/**
	 * Create a new Bot Method Handler
	 *
	 * Usually SnowTransfer creates a method handler for you, this is here for completion
	 *
	 * You can access the methods listed via `client.bot.method`, where `client` is an initialized SnowTransfer instance
	 * @param requestHandler request handler that calls the rest api
	 */
	public constructor(requestHandler: import("../RequestHandler")) {
		this.requestHandler = requestHandler;
	}

	/**
	 * Get the gateway url to connect to
	 * @returns [Gateway data](https://discord.com/developers/docs/topics/gateway#get-gateway-example-response)
	 *
	 * @example
	 * const client = new SnowTransfer("TOKEN")
	 * const result = await client.bot.getGateway()
	 * // result should be something like { url: "wss://gateway.discord.gg" }
	 */
	public getGateway(): Promise<TGatewayData> {
		return this.requestHandler.request(Endpoints.GATEWAY, "get", "json");
	}

	/**
	 * Get the gateway url to connect to and a recommended amount of shards to use
	 * @returns [Gateway data](https://discord.com/developers/docs/topics/gateway#get-gateway-example-response)
	 *
	 * @example
	 * const client = new SnowTransfer("TOKEN")
	 * const result = await client.bot.getGatewayBot()
	 * // result should be something like { url: "wss://gateway.discord.gg", shards: 1, session_start_limit: { total: 1000, remaining: 999, reset_after: 14400000, max_concurrency: 1 } }
	 */
	public getGatewayBot(): Promise<TGatewayData> {
		return this.requestHandler.request(Endpoints.GATEWAY_BOT, "get", "json");
	}

	 /**
     * Get the information of an OAuth application
     * @param appID {String} - Id of the application
     * @returns {Promise.<OAuthApplication>}
     */
    getOAuthApplication(appID?: string): Promise<TOAuthApplication> {
			return this.requestHandler.request(Endpoints.OAUTH2_APPLICATION(appID || '@me'), 'get', 'json');
	}
}

export = BotMethods;
