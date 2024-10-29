import {
  connectDataConnectEmulator,
  getDataConnect,
} from 'firebase/data-connect';
import { connectorConfig } from '@rival-news/generated';
const dataConnect = getDataConnect(connectorConfig);

connectDataConnectEmulator(dataConnect, 'localhost', 9399);
