import { Flow, ScheduledFlow, FlowListEntry } from '@app/lib/models/flow';
import { Client, ClientApproval } from '@app/lib/models/client';

export interface FlowInConfiguration {
  readonly name: string;
  readonly initialArgs?: unknown;
}

/** State of a flow being started. */
export type StartFlowState = {
  readonly state: 'request_not_sent'
}|{
  readonly state: 'request_sent',
}|{
  readonly state: 'started',
  readonly flow: Flow,
}|{
  readonly state: 'scheduled',
  readonly scheduledFlow: ScheduledFlow,
}|{
  readonly state: 'error',
  readonly error: string,
};

export interface ClientPageState {
  readonly client?: Client;
  readonly clientId?: string;

  readonly lastRemovedClientLabel?: string;

  readonly approvals: {readonly [key: string]: ClientApproval};
  readonly approvalSequence: string[];

  readonly flowListEntries: {readonly [key: string]: FlowListEntry};
  readonly flowListEntrySequence: string[];
  readonly scheduledFlows: ScheduledFlow[];

  readonly flowInConfiguration?: FlowInConfiguration;
  readonly startFlowState: StartFlowState;

  readonly approverSuggestions?: ReadonlyArray<string>;
}
