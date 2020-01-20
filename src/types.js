// @flow

import type {
  Server as HttpServer,
} from 'http';
import type {
  Server as HttpsServer,
} from 'https';

/**
 * @property httpResponseTimeout Number of milliseconds to allow for the active sockets to complete serving the response (default: 1000).
 * @property server Instance of http.Server.
 */
export type HttpTerminatorConfigurationInputType = {|
  +httpResponseTimeout?: number,
  +server: HttpServer | HttpsServer,
|};

/**
 * @property terminate Terminates HTTP server.
 */
export type HttpTerminatorType = {|
  +terminate: () => Promise<void>,
|};
