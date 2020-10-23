import {Injectable} from '@angular/core';
import {FlowDescriptor, FlowListEntry, FlowResultsQuery, ScheduledFlow} from '@app/lib/models/flow';
import {Observable} from 'rxjs';
import {ApprovalRequest, Client, ClientApproval} from '../lib/models/client';
import {StartFlowState} from './client_page_data_structures';
import {ClientPageStore} from './client_page_store';


/** Facade for client-related API calls. */
@Injectable({
  providedIn: 'root',
})
export class ClientPageFacade {
  constructor(private readonly store: ClientPageStore) {}

  /** An observable emitting the client loaded by `selectClient`. */
  readonly selectedClient$: Observable<Client> = this.store.selectedClient$;

  /** An observable emitting latest non-expired approval. */
  readonly latestApproval$: Observable<ClientApproval|undefined> =
      this.store.latestApproval$;

  /** An observable emitting current flow entries. */
  readonly flowListEntries$: Observable<ReadonlyArray<FlowListEntry>> =
      this.store.flowListEntries$;

  /** An observable emitting all scheduled flows for the client */
  readonly scheduledFlows$: Observable<ReadonlyArray<ScheduledFlow>> =
      this.store.scheduledFlows$;

  /** An observable emitting the state of a flow being started. */
  readonly startFlowState$: Observable<StartFlowState> =
      this.store.startFlowState$;

  /** An observable emitting currently selected flow descriptor. */
  readonly selectedFlowDescriptor$: Observable<FlowDescriptor|undefined> =
      this.store.selectedFlowDescriptor$;

  /** An observable emitting the last removed client label. */
  readonly lastRemovedClientLabel$: Observable<string> =
      this.store.lastRemovedClientLabel$;

  readonly approverSuggestions$ = this.store.approverSuggestions$;

  /** Selects a client with a given id. */
  selectClient(clientId: string): void {
    this.store.selectClient(clientId);
  }

  /** Requests an approval for the currently selected client. */
  requestApproval(request: ApprovalRequest): void {
    this.store.requestApproval(request);
  }

  /** Queries results for a given flow. */
  queryFlowResults(query: FlowResultsQuery) {
    this.store.queryFlowResults(query);
  }

  /** Starts a flow with given arguments. */
  startFlow(flowArgs: unknown) {
    this.store.startFlow(flowArgs);
  }

  /** Schedules a flow with given arguments. */
  scheduleFlow(flowArgs: unknown) {
    this.store.scheduleFlow(flowArgs);
  }

  /** Cancels given flow. */
  cancelFlow(flowId: string) {
    this.store.cancelFlow(flowId);
  }

  /** Unschedules a previously scheduled flow. */
  unscheduleFlow(scheduledFlowId: string) {
    this.store.unscheduleFlow(scheduledFlowId);
  }

  /** Starts the process of configuring the flow to be launched. */
  startFlowConfiguration(name: string, initialArgs?: unknown) {
    this.store.startFlowConfiguration(name, initialArgs);
  }

  /** Stops the flow configuration process. */
  stopFlowConfiguration() {
    this.store.stopFlowConfiguration();
  }

  suggestApprovers(usernameQuery: string) {
    this.store.suggestApprovers(usernameQuery);
  }

  /** Adds a label to the selected client */
  addClientLabel(label: string) {
    this.store.addClientLabel(label);
  }

  /** Removes a label from the selected client */
  removeClientLabel(label: string) {
    this.store.removeClientLabel(label);
  }
}
