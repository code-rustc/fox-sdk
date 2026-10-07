import { CodeRustcApiEnvironment, CodeRustcApiEnvironmentUrls } from './http/environment';
import { BaseClientOptions, core } from './http/types';
import { Supplier } from './http/utils/supplier';
import { makePassthroughRequest } from './http/utils/passthrough-request';
import { EntrypointClient } from './services/entrypoint';
import { MethodsClient } from './services/methods';
import { OntologyClient } from './services/ontology';
import { CatalogsClient } from './services/catalogs';
import { DatasetsClient } from './services/datasets';
import { ProductsClient } from './services/products';
import { PackagesClient } from './services/packages';
import { ArchivesClient } from './services/archives';
import { SnapshotsClient } from './services/snapshots';
import { DistributionsClient } from './services/distributions';
import { PublishersClient } from './services/publishers';
import { UniversesClient } from './services/universes';
import { FieldListsClient } from './services/field-lists';
import { TriggersClient } from './services/triggers';
import { RequestsClient } from './services/requests';
import { ResponsesClient } from './services/responses';
import { BulkOngoingClient } from './services/bulk-ongoing';
import { BlueprintsClient } from './services/blueprints';
import { BulkSamplesOngoingClient } from './services/bulk-samples-ongoing';
import { HistoryCubesClient } from './services/history-cubes';
import { FieldsClient } from './services/fields';
import { EnumsFieldsClient } from './services/enums-fields';
import { NotificationsClient } from './services/notifications';
import { NoticesClient } from './services/notices';
import { AuthClient } from './services/auth';

export * as CodeRustcApi from './api';
export { EntrypointClient } from './services/entrypoint/entrypoint-service';
export { MethodsClient } from './services/methods/methods-service';
export { OntologyClient } from './services/ontology/ontology-service';
export { CatalogsClient } from './services/catalogs/catalogs-service';
export { DatasetsClient } from './services/datasets/datasets-service';
export { ProductsClient } from './services/products/products-service';
export { PackagesClient } from './services/packages/packages-service';
export { ArchivesClient } from './services/archives/archives-service';
export { SnapshotsClient } from './services/snapshots/snapshots-service';
export { DistributionsClient } from './services/distributions/distributions-service';
export { PublishersClient } from './services/publishers/publishers-service';
export { UniversesClient } from './services/universes/universes-service';
export { FieldListsClient } from './services/field-lists/field-lists-service';
export { TriggersClient } from './services/triggers/triggers-service';
export { RequestsClient } from './services/requests/requests-service';
export { ResponsesClient } from './services/responses/responses-service';
export { BulkOngoingClient } from './services/bulk-ongoing/bulk-ongoing-service';
export { BlueprintsClient } from './services/blueprints/blueprints-service';
export { BulkSamplesOngoingClient } from './services/bulk-samples-ongoing/bulk-samples-ongoing-service';
export { HistoryCubesClient } from './services/history-cubes/history-cubes-service';
export { FieldsClient } from './services/fields/fields-service';
export { EnumsFieldsClient } from './services/enums-fields/enums-fields-service';
export { NotificationsClient } from './services/notifications/notifications-service';
export { NoticesClient } from './services/notices/notices-service';
export { AuthClient } from './services/auth/auth-service';

export * from './http';
export { CodeRustcApiEnvironment } from './http/environment';
export type { CodeRustcApiEnvironmentUrls } from './http/environment';

export class CodeRustcApiClient {
  public readonly entrypoint: EntrypointClient;

  public readonly methods: MethodsClient;

  public readonly ontology: OntologyClient;

  public readonly catalogs: CatalogsClient;

  public readonly datasets: DatasetsClient;

  public readonly products: ProductsClient;

  public readonly packages: PackagesClient;

  public readonly archives: ArchivesClient;

  public readonly snapshots: SnapshotsClient;

  public readonly distributions: DistributionsClient;

  public readonly publishers: PublishersClient;

  public readonly universes: UniversesClient;

  public readonly fieldLists: FieldListsClient;

  public readonly triggers: TriggersClient;

  public readonly requests: RequestsClient;

  public readonly responses: ResponsesClient;

  public readonly bulkOngoing: BulkOngoingClient;

  public readonly blueprints: BlueprintsClient;

  public readonly bulkSamplesOngoing: BulkSamplesOngoingClient;

  public readonly historyCubes: HistoryCubesClient;

  public readonly fields: FieldsClient;

  public readonly enumsFields: EnumsFieldsClient;

  public readonly notifications: NotificationsClient;

  public readonly notices: NoticesClient;

  public readonly auth: AuthClient;

  constructor(public config: BaseClientOptions = {}) {
    this.entrypoint = new EntrypointClient(this.config);

    this.methods = new MethodsClient(this.config);

    this.ontology = new OntologyClient(this.config);

    this.catalogs = new CatalogsClient(this.config);

    this.datasets = new DatasetsClient(this.config);

    this.products = new ProductsClient(this.config);

    this.packages = new PackagesClient(this.config);

    this.archives = new ArchivesClient(this.config);

    this.snapshots = new SnapshotsClient(this.config);

    this.distributions = new DistributionsClient(this.config);

    this.publishers = new PublishersClient(this.config);

    this.universes = new UniversesClient(this.config);

    this.fieldLists = new FieldListsClient(this.config);

    this.triggers = new TriggersClient(this.config);

    this.requests = new RequestsClient(this.config);

    this.responses = new ResponsesClient(this.config);

    this.bulkOngoing = new BulkOngoingClient(this.config);

    this.blueprints = new BlueprintsClient(this.config);

    this.bulkSamplesOngoing = new BulkSamplesOngoingClient(this.config);

    this.historyCubes = new HistoryCubesClient(this.config);

    this.fields = new FieldsClient(this.config);

    this.enumsFields = new EnumsFieldsClient(this.config);

    this.notifications = new NotificationsClient(this.config);

    this.notices = new NoticesClient(this.config);

    this.auth = new AuthClient(this.config);
  }

  /**
   * Escape hatch for calling an endpoint this SDK doesn't wrap: resolves `input` against the
   * configured baseUrl/environment, applies the SDK's default headers, auth, timeout, and retry
   * policy, and returns the raw `Response` — no request/response schema validation.
   */
  public async fetch(
    input: Request | string | URL,
    init?: RequestInit,
    requestOptions?: core.PassthroughRequest.RequestOptions,
  ): Promise<Response> {
    return makePassthroughRequest(
      input,
      init,
      {
        baseUrl:
          this.config.baseUrl ??
          (
            (await Supplier.get(this.config.environment)) ??
            (await Supplier.get(this.config.codeRustcApiEnvironment)) ??
            CodeRustcApiEnvironment.Production
          ).api,
        headers: this.config.headers,
        timeoutInSeconds: this.config.timeoutInSeconds,
        maxRetries: this.config.maxRetries,
        fetch: this.config.fetch,
        logging: this.config.logging,
      },
      requestOptions,
    );
  }

  set baseUrl(baseUrl: Supplier<string>) {
    this.entrypoint.baseUrl = baseUrl;
    this.methods.baseUrl = baseUrl;
    this.ontology.baseUrl = baseUrl;
    this.catalogs.baseUrl = baseUrl;
    this.datasets.baseUrl = baseUrl;
    this.products.baseUrl = baseUrl;
    this.packages.baseUrl = baseUrl;
    this.archives.baseUrl = baseUrl;
    this.snapshots.baseUrl = baseUrl;
    this.distributions.baseUrl = baseUrl;
    this.publishers.baseUrl = baseUrl;
    this.universes.baseUrl = baseUrl;
    this.fieldLists.baseUrl = baseUrl;
    this.triggers.baseUrl = baseUrl;
    this.requests.baseUrl = baseUrl;
    this.responses.baseUrl = baseUrl;
    this.bulkOngoing.baseUrl = baseUrl;
    this.blueprints.baseUrl = baseUrl;
    this.bulkSamplesOngoing.baseUrl = baseUrl;
    this.historyCubes.baseUrl = baseUrl;
    this.fields.baseUrl = baseUrl;
    this.enumsFields.baseUrl = baseUrl;
    this.notifications.baseUrl = baseUrl;
    this.notices.baseUrl = baseUrl;
    this.auth.baseUrl = baseUrl;
  }

  set codeRustcApiEnvironment(codeRustcApiEnvironment: CodeRustcApiEnvironment) {
    this.entrypoint.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.methods.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.ontology.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.catalogs.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.datasets.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.products.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.packages.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.archives.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.snapshots.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.distributions.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.publishers.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.universes.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.fieldLists.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.triggers.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.requests.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.responses.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.bulkOngoing.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.blueprints.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.bulkSamplesOngoing.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.historyCubes.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.fields.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.enumsFields.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.notifications.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.notices.codeRustcApiEnvironment = codeRustcApiEnvironment;
    this.auth.codeRustcApiEnvironment = codeRustcApiEnvironment;
  }

  set timeoutInSeconds(timeoutInSeconds: number) {
    this.entrypoint.timeoutInSeconds = timeoutInSeconds;
    this.methods.timeoutInSeconds = timeoutInSeconds;
    this.ontology.timeoutInSeconds = timeoutInSeconds;
    this.catalogs.timeoutInSeconds = timeoutInSeconds;
    this.datasets.timeoutInSeconds = timeoutInSeconds;
    this.products.timeoutInSeconds = timeoutInSeconds;
    this.packages.timeoutInSeconds = timeoutInSeconds;
    this.archives.timeoutInSeconds = timeoutInSeconds;
    this.snapshots.timeoutInSeconds = timeoutInSeconds;
    this.distributions.timeoutInSeconds = timeoutInSeconds;
    this.publishers.timeoutInSeconds = timeoutInSeconds;
    this.universes.timeoutInSeconds = timeoutInSeconds;
    this.fieldLists.timeoutInSeconds = timeoutInSeconds;
    this.triggers.timeoutInSeconds = timeoutInSeconds;
    this.requests.timeoutInSeconds = timeoutInSeconds;
    this.responses.timeoutInSeconds = timeoutInSeconds;
    this.bulkOngoing.timeoutInSeconds = timeoutInSeconds;
    this.blueprints.timeoutInSeconds = timeoutInSeconds;
    this.bulkSamplesOngoing.timeoutInSeconds = timeoutInSeconds;
    this.historyCubes.timeoutInSeconds = timeoutInSeconds;
    this.fields.timeoutInSeconds = timeoutInSeconds;
    this.enumsFields.timeoutInSeconds = timeoutInSeconds;
    this.notifications.timeoutInSeconds = timeoutInSeconds;
    this.notices.timeoutInSeconds = timeoutInSeconds;
    this.auth.timeoutInSeconds = timeoutInSeconds;
  }

  set environment(environment: Supplier<CodeRustcApiEnvironment | CodeRustcApiEnvironmentUrls>) {
    this.entrypoint.environment = environment;
    this.methods.environment = environment;
    this.ontology.environment = environment;
    this.catalogs.environment = environment;
    this.datasets.environment = environment;
    this.products.environment = environment;
    this.packages.environment = environment;
    this.archives.environment = environment;
    this.snapshots.environment = environment;
    this.distributions.environment = environment;
    this.publishers.environment = environment;
    this.universes.environment = environment;
    this.fieldLists.environment = environment;
    this.triggers.environment = environment;
    this.requests.environment = environment;
    this.responses.environment = environment;
    this.bulkOngoing.environment = environment;
    this.blueprints.environment = environment;
    this.bulkSamplesOngoing.environment = environment;
    this.historyCubes.environment = environment;
    this.fields.environment = environment;
    this.enumsFields.environment = environment;
    this.notifications.environment = environment;
    this.notices.environment = environment;
    this.auth.environment = environment;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
