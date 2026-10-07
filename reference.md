# Reference

## Entrypoint

<details><summary><code>client.entrypoint.<a href="/src/services/entrypoint/entrypoint-service.ts">getRoot</a>({ ...params }) -> CodeRustcApi.EntryPoint</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The entryPoint lists available top-level resources. All available resources are organized within a container called `catalogs`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entrypoint.getRoot({
  api_version: '2',
  JWT: 'JWT',
  Authorization: 'Authorization',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.GetRootRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntrypointClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Methods

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headRoot</a>({ ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headRoot({
  api_version: '2',
  JWT: 'JWT',
  Authorization: 'Authorization',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.HeadRootRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsRoot</a>({ ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsRoot({
  api_version: '2',
  JWT: 'JWT',
  Authorization: 'Authorization',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsRootRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headOntology</a>({ ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headOntology({
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.HeadOntologyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsOntology</a>({ ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsOntology({
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsOntologyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headCatalogs</a>({ ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headCatalogs({
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.HeadCatalogsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsCatalogs</a>({ ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsCatalogs({
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsCatalogsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headCatalog</a>(catalog, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headCatalog('catalog', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadCatalogRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsCatalog</a>(catalog, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsCatalog('catalog', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsCatalogRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headDatasets</a>(catalog, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headDatasets('catalog', {
  page: 2,
  q: 'q',
  subscribed: true,
  moduleLevel1: 'moduleLevel1',
  moduleLevel2: 'moduleLevel2',
  moduleLevel3: 'moduleLevel3',
  universeLabel: 'universeLabel',
  universeSubsetLabel: 'universeSubsetLabel',
  publisher: 'publisher',
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadDatasetsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsDatasets</a>(catalog, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsDatasets('catalog', {
  page: 8,
  q: 'q',
  subscribed: true,
  moduleLevel1: 'moduleLevel1',
  moduleLevel2: 'moduleLevel2',
  moduleLevel3: 'moduleLevel3',
  universeLabel: 'universeLabel',
  universeSubsetLabel: 'universeSubsetLabel',
  publisher: 'publisher',
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsDatasetsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headDataset</a>(catalog, dataset, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headDataset('catalog', 'dataset', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadDatasetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsDataset</a>(catalog, dataset, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsDataset('catalog', 'dataset', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsDatasetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headArchives</a>(catalog, dataset, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headArchives('catalog', 'dataset', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadArchivesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsArchives</a>(catalog, dataset, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsArchives('catalog', 'dataset', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsArchivesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headArchive</a>(catalog, dataset, archiveName, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headArchive('catalog', 'dataset', 'archiveName', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**archiveName:** `string`— Archive name

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadArchiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsArchive</a>(catalog, dataset, archiveName, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsArchive('catalog', 'dataset', 'archiveName', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**archiveName:** `string`— Archive name

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsArchiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headSnapshots</a>(catalog, dataset, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headSnapshots('catalog', 'dataset', {
  page: 9,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadSnapshotsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsSnapshots</a>(catalog, dataset, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsSnapshots('catalog', 'dataset', {
  page: 4,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsSnapshotsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headSnapshot</a>(catalog, dataset, snapshot, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headSnapshot('catalog', 'dataset', 'snapshot', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**snapshot:** `string`— Dataset snapshot identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadSnapshotRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsSnapshot</a>(catalog, dataset, snapshot, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsSnapshot('catalog', 'dataset', 'snapshot', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**snapshot:** `string`— Dataset snapshot identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsSnapshotRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headDistributions</a>(catalog, dataset, snapshot, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headDistributions('catalog', 'dataset', 'snapshot', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**snapshot:** `string`— Dataset snapshot identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadDistributionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsDistributions</a>(catalog, dataset, snapshot, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsDistributions('catalog', 'dataset', 'snapshot', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**snapshot:** `string`— Dataset snapshot identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsDistributionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headDistribution</a>(catalog, dataset, snapshot, distributionName, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headDistribution('catalog', 'dataset', 'snapshot', 'distributionName', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**snapshot:** `string`— Dataset snapshot identifier

</dd>
</dl>

<dl>
<dd>

**distributionName:** `string`— Distribution name

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadDistributionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsDistribution</a>(catalog, dataset, snapshot, distributionName, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsDistribution('catalog', 'dataset', 'snapshot', 'distributionName', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**snapshot:** `string`— Dataset snapshot identifier

</dd>
</dl>

<dl>
<dd>

**distributionName:** `string`— Distribution name

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsDistributionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headersForACollectionOfPublisherResources</a>({ ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headersForACollectionOfPublisherResources({
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.HeadCatalogsBbgPublishersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsForACollectionOfPublisherResources</a>({ ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsForACollectionOfPublisherResources({
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsCatalogsBbgPublishersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headersForMetadataForAPublisher</a>(publisherName, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headersForMetadataForAPublisher('publisherName', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publisherName:** `string`— Publisher name

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadCatalogsBbgPublishersPublisherNameRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsForMetadataForAPublisher</a>(publisherName, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsForMetadataForAPublisher('publisherName', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publisherName:** `string`— Publisher name

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsCatalogsBbgPublishersPublisherNameRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headUniverses</a>(catalog, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headUniverses('catalog', {
  page: 5,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadUniversesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsUniverses</a>(catalog, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsUniverses('catalog', {
  page: 10,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsUniversesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headUniverse</a>(catalog, universeIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headUniverse('catalog', 'universeIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**universeIdentifier:** `string`— Universe identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadUniverseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsUniverse</a>(catalog, universeIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsUniverse('catalog', 'universeIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**universeIdentifier:** `string`— Universe identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsUniverseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headFieldLists</a>(catalog, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headFieldLists('catalog', {
  page: 3,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadFieldListsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsFieldLists</a>(catalog, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsFieldLists('catalog', {
  page: 8,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsFieldListsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headFieldList</a>(catalog, fieldListIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headFieldList('catalog', 'fieldListIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**fieldListIdentifier:** `string`— Field list identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadFieldListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsFieldList</a>(catalog, fieldListIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsFieldList('catalog', 'fieldListIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**fieldListIdentifier:** `string`— Field list identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsFieldListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headTriggers</a>(catalog, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headTriggers('catalog', {
  page: 7,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadTriggersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsTriggers</a>(catalog, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsTriggers('catalog', {
  page: 5,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsTriggersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headTrigger</a>(catalog, triggerIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headTrigger('catalog', 'triggerIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**triggerIdentifier:** `string`— Trigger identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadTriggerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsTrigger</a>(catalog, triggerIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsTrigger('catalog', 'triggerIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**triggerIdentifier:** `string`— Trigger identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsTriggerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headRequests</a>(catalog, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headRequests('catalog', {
  page: 7,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadRequestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsRequests</a>(catalog, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsRequests('catalog', {
  page: 123,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsRequestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headRequest</a>(catalog, requestIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headRequest('catalog', 'requestIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**requestIdentifier:** `string`— Request Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadRequestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsRequest</a>(catalog, requestIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsRequest('catalog', 'requestIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**requestIdentifier:** `string`— Request Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsRequestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headRequestUniverseList</a>(catalog, requestIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headRequestUniverseList('catalog', 'requestIdentifier', {
  page: 8,
  pageSize: 5,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**requestIdentifier:** `string`— Request Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadRequestUniverseListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsRequestUniverse</a>(catalog, requestIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsRequestUniverse('catalog', 'requestIdentifier', {
  page: 9,
  pageSize: 9,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**requestIdentifier:** `string`— Request Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsRequestUniverseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headRequestFieldList</a>(catalog, requestIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headRequestFieldList('catalog', 'requestIdentifier', {
  page: 10,
  pageSize: 5,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**requestIdentifier:** `string`— Request Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadRequestFieldListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsRequestFieldList</a>(catalog, requestIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsRequestFieldList('catalog', 'requestIdentifier', {
  page: 10,
  pageSize: 10,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**requestIdentifier:** `string`— Request Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsRequestFieldListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headRequestTrigger</a>(catalog, requestIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headRequestTrigger('catalog', 'requestIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**requestIdentifier:** `string`— Request Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadRequestTriggerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsRequestTrigger</a>(catalog, requestIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsRequestTrigger('catalog', 'requestIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**requestIdentifier:** `string`— Request Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsRequestTriggerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headFields</a>({ ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headFields({
  page: 10,
  q: 'q',
  DL_Bulk: 'DL:Bulk',
  dlCommercialModelCategory: 'dlCommercialModelCategory',
  dlAvailableInGetHistory: true,
  Data_License: 'Data License',
  Platform_Static: 'Platform: Static',
  Platform_Streaming: 'Platform: Streaming',
  Platform_Terminal_Required: 'Platform: Terminal Required',
  xsd_type: 'xsd:type',
  YK_Commodity: 'YK: Commodity',
  YK_Corporate: 'YK: Corporate',
  YK_Currency: 'YK: Currency',
  YK_Equity: 'YK: Equity',
  YK_Index: 'YK: Index',
  YK_Mortgage: 'YK: Mortgage',
  YK_Money_Market: 'YK: Money Market',
  YK_Municipal: 'YK: Municipal',
  YK_Preferred: 'YK: Preferred',
  YK_US_Government: 'YK: US Government',
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.HeadFieldsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsFields</a>({ ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsFields({
  page: 123,
  q: 'q',
  DL_Bulk: 'DL:Bulk',
  dlCommercialModelCategory: 'dlCommercialModelCategory',
  dlAvailableInGetHistory: true,
  Data_License: 'Data License',
  Platform_Static: 'Platform: Static',
  Platform_Streaming: 'Platform: Streaming',
  Platform_Terminal_Required: 'Platform: Terminal Required',
  xsd_type: 'xsd:type',
  YK_Commodity: 'YK: Commodity',
  YK_Corporate: 'YK: Corporate',
  YK_Currency: 'YK: Currency',
  YK_Equity: 'YK: Equity',
  YK_Index: 'YK: Index',
  YK_Mortgage: 'YK: Mortgage',
  YK_Money_Market: 'YK: Money Market',
  YK_Municipal: 'YK: Municipal',
  YK_Preferred: 'YK: Preferred',
  YK_US_Government: 'YK: US Government',
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsFieldsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">headField</a>(field, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified resource were requested with an HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.headField('field', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field:** `string`— Field identifier. You can use either Mnemonic, Old Mnemonic, Clean Name or Field ID.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadFieldRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.methods.<a href="/src/services/methods/methods-service.ts">optionsField</a>(field, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the methods that are supported by this endpoint.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.methods.optionsField('field', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field:** `string`— Field identifier. You can use either Mnemonic, Old Mnemonic, Clean Name or Field ID.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.OptionsFieldRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MethodsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ontology

<details><summary><code>client.ontology.<a href="/src/services/ontology/ontology-service.ts">getOntology</a>({ ...params }) -> ArrayBuffer | Uint8Array | Buffer | Blob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A resource with a canonical URL which provides access to a [ttl serialization of the latest snapshot of the DATA\<GO\> Ontology](https://data.bloomberg.com/catalogs/bbg/datasets/beapOntology/snapshots/20200406/distributions/beapOntology.ttl)

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ontology.getOntology({
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.GetOntologyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OntologyClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Catalogs

<details><summary><code>client.catalogs.<a href="/src/services/catalogs/catalogs-service.ts">getCatalogs</a>({ ...params }) -> CodeRustcApi.Catalogs</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a collection of Bloomberg Data License catalogs, organized by Data License Account. DL REST API exposes the following [catalog](#tag/catalogs) resources (subject to access rights): ## Bloomberg Catalog The Bloomberg catalog ([`/catalogs/bbg`](#tag/catalogs)) is visible to all DL REST API users. ### Bulk Datasets The Bloomberg catalog contains Bulk datasets offered by Bloomberg Data License. Access rights to these Bulk [datasets](#tag/datasets) are governed through Bloomberg Data License Bulk Agreements for the Account that issued the requestor's credentials. Samples of the Bulk [datasets](#tag/datasets) are available to all DL REST API users. ### Metadata The Bloomberg catalog exposes [Fields](#tag/fields) and [publishers](#tag/publishers) metadata describing all Data License products to all DL REST API users. ### Bloomberg Re-Usable Resources The Bloomberg catalog also provides containers of "re-usable" [universes](#tag/universes) and [fieldLists](#tag/fieldLists). These resources may be referenced through a request submitted through an Account `catalog` ## Account Catalogs An Account Catalog ([`/catalogs/{catalog}`](#tag/catalogs)) and the resources in it are accessible only to a requestor using credentials issued for Bloomberg Data License account that is subject to a metered usage agreement, such as a Master Data Schedule (MDS) agreement. ### Account Re-Usable Resources Each Account Catalog allows DL REST API users to create and maintain user-defined reusable resources than can be used to request a [Custom dataset](#tag/datasets). These re-usable resources, or components, comprise: ([requests](#tag/requests), [universes](#tag/universes), [fieldLists](#tag/fieldLists) and [triggers](#tag/triggers)). The Account Catalog also provides the Bloomberg Data License responses ([datasets](#tag/datasets) to these requests.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalogs.getCatalogs({
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.GetCatalogsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CatalogsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.catalogs.<a href="/src/services/catalogs/catalogs-service.ts">getCatalog</a>(catalog, { ...params }) -> CodeRustcApi.Catalog</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Both the [Bloomberg Catalog](#tag/catalogs) and an [Account Catalog](#tag/catalogs) comprise a collection of resource containers, comprising [datasets](#tag/datasets), [publishers](#tag/publishers), [fields](#tag/fields), [requests](#tag/requests), [universes](#tag/universes), [fieldLists](#tag/fieldLists) and [triggers](#tag/triggers).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalogs.getCatalog('catalog', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetCatalogRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CatalogsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Datasets

<details><summary><code>client.datasets.<a href="/src/services/datasets/datasets-service.ts">getDatasets</a>(catalog, { ...params }) -> CodeRustcApi.Datasets</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

## Bloomberg Catalog (Bulk Datasets) The [Bloomberg Catalog](#tag/catalogs) contains a collection of Bulk [datasets](#tag/datasets) defined and offered by Bloomberg Data License. Access rights to Bulk `datasets` are determined through active subscriptions for the DL account that issued the requestor's credentials. Sample data is accessible for all Bulk `datasets`. The `subscribed` property (which can be used as a query parameter) indicates if the requesting credentials are privileged to access non-sample [snapshots](#tag/snapshots) of each dataset. ## Account Catalog (Custom Datasets) An [Account Catalog](#tag/catalogs) contains a collection of Bloomberg Data License responses ([datasets](#tag/datasets)) to the user defined [requests](#/tags/requests) that have been submitted to the same [catalog](#tag/catalogs). Custom `datasets` are accessible to requestors using any credential issued by the DL account that submitted the [request](#tag/requests)

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.datasets.getDatasets('catalog', {
  page: 2,
  sort: 'sort',
  q: 'q',
  subscribed: true,
  moduleLevel1: 'moduleLevel1',
  moduleLevel2: 'moduleLevel2',
  moduleLevel3: 'moduleLevel3',
  universeLabel: 'universeLabel',
  universeSubsetLabel: 'universeSubsetLabel',
  publisher: 'publisher',
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetDatasetsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DatasetsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.datasets.<a href="/src/services/datasets/datasets-service.ts">getDataset</a>(catalog, dataset, { ...params }) -> CodeRustcApi.GetDatasetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

## Bulk Dataset In the [Bloomberg Catalog](#tag/catalogs), a `dataset` is a class of publication, containing a time series of [snapshots](#tag/snapshots). Each [snapshot](#tag/snapshots) is a point in the time series, which represents a single publication of the `dataset`. ## Custom Dataset In an [Account Catalog](#tag/catalogs), each `dataset` represents a response to a user defined [request](#/tags/request) in that [catalog](#tag/catalogs). The custom `dataset` and the [snapshots](#tag/snapshots) container within it are created at the moment a [request](#tag/requests) is created. Individual [snapshot](#tag/snapshots) resources are added to the [snapshots](#tag/snapshots) container each time the [request](#tags/requests) is executed.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.datasets.getDataset('catalog', 'dataset', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetDatasetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DatasetsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Products

<details><summary><code>client.products.<a href="/src/services/products/products-service.ts">getProducts</a>({ ...params }) -> CodeRustcApi.BulkProductCollection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A collection of Data Licence Bulk products with optional filtering. A product is a collection of related Data License Bulk packages identified by a single `productCode`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.getProducts({
  productCodes: 111643,
  themes: 'Company Data',
  page: 5,
  pageSize: 7,
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.GetProductsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Packages

<details><summary><code>client.packages.<a href="/src/services/packages/packages-service.ts">getPackages</a>({ ...params }) -> CodeRustcApi.BulkPackageCollection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A collection of Data Licence Bulk packages with optional filtering. A rich description of the package content in html format can be found in the products/formattedDescription field.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.packages.getPackages({
  packageCodes: 123,
  page: 4,
  pageSize: 4,
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.GetPackagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PackagesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Archives

<details><summary><code>client.archives.<a href="/src/services/archives/archives-service.ts">getArchives</a>(catalog, dataset, { ...params }) -> CodeRustcApi.Archive</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`archives` returns a collection of [archive](#tag/archives) resources, where each [archive](#tag/archives) describes aggregated historical data for the [dataset](#tag/datasets), and a downloadable link.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.archives.getArchives('catalog', 'dataset', {
  status: 'final',
  startSnapshotDate: '2023-12-13',
  endSnapshotDate: '2023-12-13',
  startIssued: 'startIssued',
  endIssued: 'endIssued',
  page: 123,
  pageSize: 7,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetArchivesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArchivesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.archives.<a href="/src/services/archives/archives-service.ts">getArchive</a>(catalog, dataset, archiveName, { ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A downloadable serialization of [archive](#tag/archive) in formats such as Parquet(http://parquet.apache.org/documentation/latest/). Please note that for content encoding of Parquet only identity (Accept-Encoding = identity) is supported, but not gzip.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.archives.getArchive('catalog', 'dataset', 'archiveName', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**archiveName:** `string`— Archive name

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetArchiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArchivesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Snapshots

<details><summary><code>client.snapshots.<a href="/src/services/snapshots/snapshots-service.ts">getSnapshots</a>(catalog, dataset, { ...params }) -> CodeRustcApi.Snapshots</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

`snapshots` returns a collection of [snapshot](#tag/snapshots) resources, where each [snapshot](#tag/snapshots) describes a point in the publication time series for the [dataset](#tag/datasets), and may be downloaded as a full or sample [distributions](#tag/distributions).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapshots.getSnapshots('catalog', 'dataset', {
  page: 5,
  startIssued: 'startIssued',
  endIssued: 'endIssued',
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetSnapshotsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SnapshotsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.snapshots.<a href="/src/services/snapshots/snapshots-service.ts">getSnapshot</a>(catalog, dataset, snapshot, { ...params }) -> CodeRustcApi.Snapshot</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A `snapshot` represents a publication of a [dataset](#tag/datasets). It contains a collection of [distributions](#tag/distributions) which are downloadable serializations of the `snapshots` as different content types.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapshots.getSnapshot('catalog', 'dataset', 'snapshot', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**snapshot:** `string`— Dataset snapshot identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetSnapshotRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SnapshotsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Distributions

<details><summary><code>client.distributions.<a href="/src/services/distributions/distributions-service.ts">getDistributions</a>(catalog, dataset, snapshot, { ...params }) -> CodeRustcApi.Distributions</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A collection of downloadable [distribution](#tag/distribution) resources. Each [distribution](#tag/distributions) in the collection serializes a [snapshot](#tag/snapshots) as a different [media type](https://www.w3.org/TR/vocab-dcat-2/#Property:distribution_media_type) (content type), and is represented as a structure: the downloadable [distribution] itself; if it is a sample of the [snapshot](#tag/snapshots) (samples are accessible to all users); and if it is accessible with the requesting credentials.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.distributions.getDistributions('catalog', 'dataset', 'snapshot', {
  type: ['Distribution'],
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**snapshot:** `string`— Dataset snapshot identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetDistributionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DistributionsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.distributions.<a href="/src/services/distributions/distributions-service.ts">getDistribution</a>(catalog, dataset, snapshot, distributionName, { ...params }) -> ArrayBuffer | Uint8Array | Buffer | Blob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A downloadable serialization of [snapshot](#tag/snapshots) as a standard [media type](https://www.w3.org/TR/vocab-dcat-2/#Property:distribution_media_type) (content type).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.distributions.getDistribution('catalog', 'dataset', 'snapshot', 'distributionName', {
  Range: 'Range',
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**dataset:** `string`— Dataset identifier

</dd>
</dl>

<dl>
<dd>

**snapshot:** `string`— Dataset snapshot identifier

</dd>
</dl>

<dl>
<dd>

**distributionName:** `string`— Distribution name

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetDistributionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DistributionsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Publishers

<details><summary><code>client.publishers.<a href="/src/services/publishers/publishers-service.ts">publisherResources</a>({ ...params }) -> CodeRustcApi.PublisherResourcesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A collection of [(Dublin Core)](http://dublincore.org/documents/dcmi-terms/#terms-publisher) `Publishers`, which are used as a primary means of classifying each [Bulk Dataset](#tag/datasets) in the [Bloomberg Catalog](#tag/catalogs). `Publishers` are provided to support the exploration and discovery of [Bulk Datasets](#tag/datasets). Each [publisher](#tag/publishers) is annotated with a dataset count and facetted search URL to list the [datasets](#tag/datasets) offered by that [publisher](#tag/publishers).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.publishers.publisherResources({
  page: 9,
  sort: 'sort',
  q: 'q',
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.PublisherResourcesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PublishersClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.publishers.<a href="/src/services/publishers/publishers-service.ts">publisherMetadata</a>(publisherName, { ...params }) -> CodeRustcApi.PublisherMetadataResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A single [(Dublin Core)](http://dublincore.org/documents/dcmi-terms/#terms-publisher) `Publisher`, which exists to classify a group of [Bulk Datasets](#tag/datasets) in the [Bloomberg Catalog](#tag/catalogs). Each [publisher](#tag/publishers) is annotated with a dataset count and facetted search URL to list the [datasets](#tag/datasets) offered by that [publisher](#tag/publishers).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.publishers.publisherMetadata('publisherName', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**publisherName:** `string`— Publisher name

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.PublisherMetadataRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PublishersClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Universes

<details><summary><code>client.universes.<a href="/src/services/universes/universes-service.ts">getUniverses</a>(catalog, { ...params }) -> CodeRustcApi.UniverseCollection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A collection of universes within a specific catalog.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.universes.getUniverses('catalog', {
  page: 10,
  pageSize: 10,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetUniversesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UniversesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.universes.<a href="/src/services/universes/universes-service.ts">postUniverse</a>(catalog, { ...params }) -> CodeRustcApi.Status</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new universe resource. Requires an identifier (the name, used to construct the URI, must begin with a letter and consist only of alphanumeric characters), title (short description) and the contents.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.universes.postUniverse('catalog', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
  body: universePostPayload,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.PostUniverseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UniversesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.universes.<a href="/src/services/universes/universes-service.ts">getUniverse</a>(catalog, universeIdentifier, { ...params }) -> CodeRustcApi.Universe</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Available content for the specified universe.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.universes.getUniverse('catalog', 'universeIdentifier', {
  page: 10,
  pageSize: 5,
  requestType: 'DataRequest',
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**universeIdentifier:** `string`— Universe identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetUniverseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UniversesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.universes.<a href="/src/services/universes/universes-service.ts">patchUniverse</a>(catalog, universeIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Please be aware that this will affect all requests that are actively referencing the universe being updated.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.universes.patchUniverse('catalog', 'universeIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
  body: universePatchPayload,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**universeIdentifier:** `string`— Universe identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.PatchUniverseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UniversesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.universes.<a href="/src/services/universes/universes-service.ts">deleteUniverse</a>(catalog, universeIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Universes that are referenced by active recurring requests CAN NOT be deleted and will return a status code of 400.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.universes.deleteUniverse('catalog', 'universeIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**universeIdentifier:** `string`— Universe identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.DeleteUniverseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UniversesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.universes.<a href="/src/services/universes/universes-service.ts">getDeletedUniverse</a>(catalog, universeUuid, { ...params }) -> CodeRustcApi.DeletedUniverse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Universe that has been deleted.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.universes.getDeletedUniverse('catalog', 'universeUUID', {
  page: 2,
  pageSize: 10,
  requestType: 'DataRequest',
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**universeUuid:** `string`— Universe unique identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetDeletedUniverseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UniversesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## FieldLists

<details><summary><code>client.fieldLists.<a href="/src/services/field-lists/field-lists-service.ts">getFieldLists</a>(catalog, { ...params }) -> CodeRustcApi.FieldListCollection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A collection of field lists within a specific catalog.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fieldLists.getFieldLists('catalog', {
  page: 7,
  pageSize: 3,
  type: 'DataFieldList',
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetFieldListsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldListsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fieldLists.<a href="/src/services/field-lists/field-lists-service.ts">postFieldList</a>(catalog, { ...params }) -> CodeRustcApi.Status</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new field list resource. Requires an identifier (the name, used to construct the URI, must begin with a letter and consist only of alphanumeric characters), title (short description) and the contents.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fieldLists.postFieldList('catalog', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
  body: fieldListPostPayload,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.PostFieldListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldListsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fieldLists.<a href="/src/services/field-lists/field-lists-service.ts">getFieldList</a>(catalog, fieldListIdentifier, { ...params }) -> CodeRustcApi.GetFieldListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A field list resource.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fieldLists.getFieldList('catalog', 'fieldListIdentifier', {
  page: 3,
  pageSize: 1,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**fieldListIdentifier:** `string`— Field list identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetFieldListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldListsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fieldLists.<a href="/src/services/field-lists/field-lists-service.ts">patchFieldList</a>(catalog, fieldListIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Field lists that have active requests referencing them CAN NOT be updated and will return a 400 status code.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fieldLists.patchFieldList('catalog', 'fieldListIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
  body: fieldListPatchPayload,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**fieldListIdentifier:** `string`— Field list identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.PatchFieldListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldListsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fieldLists.<a href="/src/services/field-lists/field-lists-service.ts">deleteFieldList</a>(catalog, fieldListIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Field Lists that are referenced by active recurring requests CAN NOT be deleted and will return a status code of 400.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fieldLists.deleteFieldList('catalog', 'fieldListIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**fieldListIdentifier:** `string`— Field list identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.DeleteFieldListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldListsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fieldLists.<a href="/src/services/field-lists/field-lists-service.ts">getDeletedFieldList</a>(catalog, fieldListUuid, { ...params }) -> CodeRustcApi.GetDeletedFieldListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A field list that has been deleted.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fieldLists.getDeletedFieldList('catalog', 'fieldListUUID', {
  page: 2,
  pageSize: 8,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**fieldListUuid:** `string`— Field list unique identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetDeletedFieldListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldListsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Triggers

<details><summary><code>client.triggers.<a href="/src/services/triggers/triggers-service.ts">getTriggers</a>(catalog, { ...params }) -> CodeRustcApi.TriggerCollection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A collection of triggers within a specific catalog.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.getTriggers('catalog', {
  page: 8,
  pageSize: 8,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetTriggersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TriggersClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.triggers.<a href="/src/services/triggers/triggers-service.ts">postTrigger</a>(catalog, { ...params }) -> CodeRustcApi.Status</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new trigger resource. Requires an identifier (the name, used to construct the URI, must begin with a letter and consist only of alphanumeric characters), title (short description) and the contents \| Trigger @type \| Action \| Time Zone \| Time Behavior \| Frequency \| Scheduling Behavior \| \| --- \| --- \| --- \| --- \| --- \| --- \| \| ScheduledTrigger \| Execute a DataRequest, HistoryRequest, or ActionsRequest \| Billing region of requesting account. \| If `startTime` is omitted and `startDate` is in the future, the request is scheduled for 00:00. If `startTime` is omitted and `startDate` is in the past, the request is scheduled immediately. \|Once \| If `startDate` and `startTime` have passed, execution is scheduled immediately. Otherwise request is scheduled for `startDate` and `startTime`. \| \| \| \| \| \| Recurring \| If `startDate` has passed, request submission will fail. Otherwise schedule begins at `startDate` and `startTime`. If `startDate` is omitted, it defaults to the next date for the `frequency`. \| \| SubmitTrigger \| Execute a DataRequest, HistoryRequest, ActionsRequest, or TickHistoryRequest \| Billing region of requesting account. \| The request is scheduled for immediate execution. \|Once \| The request is scheduled for immediate execution. \| \| BvalSnapshotTrigger \| Execute a BvalSnapshotRequest\| `snapshotTimeZoneName` must be a valid [IANA](https://www.iana.org/time-zones) Time Zone Name and [BVAL snapshot timezone](/#section/Features/BVAL-Evaluated-Pricing) \| `snapshotTime` must be a valid BVAL [snapshot time](/#section/Features/BVAL-Evaluated-Pricing) within `snapshotTimeZoneName`\| Any \| If [cutoff](/#section/Features/BVAL-Evaluated-Pricing) has passed for the `snapshotDate` and `snapshotTime` provided, the request will be rejected. If `snapshotDate` is omitted the request will be scheduled for the next available `snapshotDate`. \| \| PricingSnapshotTrigger \| Execute a PricingSnapshotRequest \| Pricing Snapshots are only supported in the Billing region of the requesting account. \| `snapshotTime` must be, 0, 15, 30, or 45 minutes past the hour. \| Any \| If [cutoff](/#section/Features/Pricing-Snapshots) has passed for the `snapshotDate` and `snapshotTime` provided, the request will be rejected. If `snapshotDate` is omitted the request will be scheduled for the next available `snapshotDate`. \|

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.postTrigger('catalog', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
  body: submitTriggerPostPayload,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.PostTriggerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TriggersClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.triggers.<a href="/src/services/triggers/triggers-service.ts">getTrigger</a>(catalog, triggerIdentifier, { ...params }) -> CodeRustcApi.PolymorphicTrigger</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A trigger resource

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.getTrigger('catalog', 'triggerIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**triggerIdentifier:** `string`— Trigger identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetTriggerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TriggersClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.triggers.<a href="/src/services/triggers/triggers-service.ts">patchTrigger</a>(catalog, triggerIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Triggers that are referenced by active recurring requests CAN NOT be updated and will return a status code of 400.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.patchTrigger('catalog', 'triggerIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
  body: submitTriggerPatchPayload,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**triggerIdentifier:** `string`— Trigger identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.PatchTriggerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TriggersClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.triggers.<a href="/src/services/triggers/triggers-service.ts">deleteTrigger</a>(catalog, triggerIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Triggers that are referenced by active recurring requests CAN NOT be deleted and will return a status code of 400

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.deleteTrigger('catalog', 'triggerIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**triggerIdentifier:** `string`— Trigger identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.DeleteTriggerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TriggersClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.triggers.<a href="/src/services/triggers/triggers-service.ts">getDeletedTrigger</a>(catalog, triggerUuid, { ...params }) -> CodeRustcApi.PolymorphicDeletedTrigger</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A trigger that has been deleted.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.getDeletedTrigger('catalog', 'triggerUUID', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**triggerUuid:** `string`— Trigger unique identifier.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetDeletedTriggerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TriggersClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Requests

<details><summary><code>client.requests.<a href="/src/services/requests/requests-service.ts">getRequests</a>(catalog, { ...params }) -> CodeRustcApi.RequestCollection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A collection of dataset requests within a catalog

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.requests.getRequests('catalog', {
  page: 9,
  pageSize: 7,
  name: 'name',
  enabled: true,
  universeIdentifier: 'universeIdentifier',
  fieldListIdentifier: 'fieldListIdentifier',
  triggerIdentifier: 'triggerIdentifier',
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetRequestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RequestsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.requests.<a href="/src/services/requests/requests-service.ts">postRequest</a>(catalog, { ...params }) -> CodeRustcApi.RequestCreatedStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A custom dataset request requires an identifier (the name, used to construct the URI, must begin with a letter and consist only of alphanumeric characters), title (short description) and the contents for a request.\</p\> A request can define all dataset configuration including `universe`, `fieldList` and `trigger` details inside a single POST body. In this scenario these elements are not reusable and are available to the new request only. Optionally a request can be linked using IRIs to reusable [universe](#tag/universes), [fieldList](#tag/fieldLists) and [trigger](#tag/triggers) resources in either the `bbg` or client catalog. Bloomberg provides lists of curated reusable universe and fieldList resources, a client can also define their own custom resources for reuse (see "with linked resource" examples for further context). \| Request @type \| Description \| Universe Evaluation \| Security Level Overrides \| Required FieldList @type \| Required Trigger @type \| \| --- \| --- \| --- \| --- \| -- \| -- \| \| DataRequest \| A DataRequest generates output at a point in time for a Universe and FieldList on an ad-hoc or scheduled basis. \| Execution time \| Supported \| DataFieldList \| SubmitTrigger, ScheduledTrigger \| \| HistoryRequest \| A HistoryRequest retrieves historical data fields for a Universe and FieldList within the given date range on an ad-hoc or scheduled basis. \| Execution time \| Supported \| HistoryFieldList \| SubmitTrigger, ScheduledTrigger \| \| ActionsRequest \| An ActionsRequest retrieves corporate actions for a Universe, within a specified range of dates. \| Execution time \| Not supported \| Not applicable \| SubmitTrigger, ScheduledTrigger \| \| BvalSnapshotRequest \| A BvalSnapshotRequest schedules the snapshot and delivery of BVAL Evaluated Prices for a Universe. You can request a snapshot for [these times](/#section/Features/BVAL-Evaluated-Pricing). Response delivery times depend upon the `snapshotTier` you select.\| BVAL securities are validated at approximately 00:00 (midnight) NY time. For BVAL (tier-1 and tier-2) scheduled requests, if users want to update the universe of securities, they will need to PATCH the saved universe prior to 00:00 (midnight) NY time in order for the changes to be reflected in the next scheduled BVAL snapshot runtime. \| Pricing Source only \| BvalSnapshotFieldList \| BvalSnapshotTrigger \| \| PricingSnapshotRequest \| A PricingSnapshotRequest provides a precise point in time snapshot of market prices for any instrument, available at 15 minute intervals throughout the day. The response will be delivered shortly after the snapshot time requested, subject to an embargo period for the requested instruments (see [Exchange Delay](https://data.bloomberg.com/catalogs/bbg/fields/exchangeDelay/)). \| For requests submitted on `snapshotDate`, universe is evaluated at snapshot [cutoff](/#section/Features/Pricing-Snapshots). For requests submitted for a future `snapshotDate`, the universe is evaluated at midnight EDST on that `snapshotDate`. \| Pricing Source only \| Not applicable \| PricingSnapshotTrigger \| \| TickHistoryRequest \| A TickHistoryRequest retrieves intraday prices for executed trades, bid/ask quotes, or both. You can submit requests for either ticks or bars (i.e., an open, high, low, and close price per period) within any time or date range. \| Execution time \| Not supported \| Not applicable \| SubmitTrigger, ScheduledTrigger \| \| EntityRequest \| An EntityRequest retrieves entity-level reference data. \| Execution time \| Not supported \| EntityFieldList \| SubmitTrigger, ScheduledTrigger \| Security level overrides are ignored where not supported.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.requests.postRequest('catalog', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
  body: dataRequestPostPayload,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.PostRequestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RequestsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.requests.<a href="/src/services/requests/requests-service.ts">getRequest</a>(catalog, requestIdentifier, { ...params }) -> CodeRustcApi.GetRequestResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A request resource

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.requests.getRequest('catalog', 'requestIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**requestIdentifier:** `string`— Request Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetRequestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RequestsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.requests.<a href="/src/services/requests/requests-service.ts">patchRequest</a>(catalog, requestIdentifier, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update or disable a request.\<p\>The request's universe can be patched here; if, and only if, the request's universe is not a universe resource and then, can only be patched to another request level universe.\</p\>

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.requests.patchRequest('catalog', 'requestIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
  body: requestPatchPayload,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**requestIdentifier:** `string`— Request Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.PatchRequestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RequestsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.requests.<a href="/src/services/requests/requests-service.ts">getUniverseByRequest</a>(catalog, requestIdentifier, { ...params }) -> CodeRustcApi.Universe</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The universe for a specific Per Security request

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.requests.getUniverseByRequest('catalog', 'requestIdentifier', {
  page: 1,
  pageSize: 1,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**requestIdentifier:** `string`— Request Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetUniverseByRequestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RequestsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.requests.<a href="/src/services/requests/requests-service.ts">getFieldListByRequest</a>(catalog, requestIdentifier, { ...params }) -> CodeRustcApi.GetFieldListByRequestResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The field list for a specific Per Security request

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.requests.getFieldListByRequest('catalog', 'requestIdentifier', {
  page: 5,
  pageSize: 4,
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**requestIdentifier:** `string`— Request Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetFieldListByRequestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RequestsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.requests.<a href="/src/services/requests/requests-service.ts">getTriggerByRequest</a>(catalog, requestIdentifier, { ...params }) -> CodeRustcApi.GetTriggerByRequestResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The trigger for a specific Per Security request

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.requests.getTriggerByRequest('catalog', 'requestIdentifier', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**requestIdentifier:** `string`— Request Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetTriggerByRequestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RequestsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Responses

<details><summary><code>client.responses.<a href="/src/services/responses/responses-service.ts">getResponsesCollection</a>(catalog, { ...params }) -> CodeRustcApi.ContentCollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A collection of downloadable Per Security output data files generated in the last 7 days in the requested serialization format for a DL account. Each output file has a unique key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.responses.getResponsesCollection('catalog', {
  prefix: 'prefix',
  limit: 939,
  next: 'next',
  requestIdentifier: 'requestIdentifier',
  requestName: 'requestName',
  snapshotStartDateTime: '2024-01-01T00:01:00',
  snapshotEndDateTime: '2024-01-02T00:00:00',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. The customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetResponsesCollectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ResponsesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.responses.<a href="/src/services/responses/responses-service.ts">getResponsesContent</a>(catalog, key, { ...params }) -> ArrayBuffer | Uint8Array | Buffer | Blob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A downloadable Per Security output data file identified by the key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.responses.getResponsesContent('catalog', 'key', {
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. The customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**key:** `string`— Key for the downloadable output file.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetResponsesContentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ResponsesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.responses.<a href="/src/services/responses/responses-service.ts">headResponsesContent</a>(catalog, key, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified snapshot data file were requested with the HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.responses.headResponsesContent('catalog', 'key', {
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**catalog:** `string`— Catalog identifier. The customer's DL account number (e.g. `1234`).

</dd>
</dl>

<dl>
<dd>

**key:** `string`— Key for the downloadable output file.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadResponsesContentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ResponsesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BulkOngoing

<details><summary><code>client.bulkOngoing.<a href="/src/services/bulk-ongoing/bulk-ongoing-service.ts">getBulkCollection</a>({ ...params }) -> CodeRustcApi.ContentCollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A collection of downloadable Bulk data files generated in the last 7 days. Each file has a unique key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkOngoing.getBulkCollection({
  prefix: 'prefix',
  limit: 973,
  next: 'next',
  packageCodes: 123,
  datasetNames: 'equityNamr,equityMifidEuro',
  fileExtensions: 'avro',
  snapshotDate: '20240101',
  snapshotStartDate: '20240101',
  snapshotEndDate: '20240102',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.GetBulkCollectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkOngoingClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkOngoing.<a href="/src/services/bulk-ongoing/bulk-ongoing-service.ts">getBulkContent</a>(key, { ...params }) -> ArrayBuffer | Uint8Array | Buffer | Blob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A downloadable Bulk data file identified by the key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkOngoing.getBulkContent('key', {
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**key:** `string`— Key for the downloadable output file.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetBulkContentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkOngoingClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkOngoing.<a href="/src/services/bulk-ongoing/bulk-ongoing-service.ts">headBulkContent</a>(key, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified Bulk data file were requested with the HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkOngoing.headBulkContent('key', {
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**key:** `string`— Key for the downloadable output file.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadBulkContentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkOngoingClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Blueprints

<details><summary><code>client.blueprints.<a href="/src/services/blueprints/blueprints-service.ts">getBlueprintsCollection</a>({ ...params }) -> CodeRustcApi.ContentCollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A collection of Blueprint data files each describing a specific product package.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.blueprints.getBlueprintsCollection({
  prefix: 'prefix',
  limit: 897,
  next: 'next',
  packageCodes: 123,
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.GetBlueprintsCollectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BlueprintsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.blueprints.<a href="/src/services/blueprints/blueprints-service.ts">getBlueprintsContent</a>(key, { ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A downloadable Blueprints data file identified by the key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.blueprints.getBlueprintsContent('key', {
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**key:** `string`— Key for the downloadable output file.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetBlueprintsContentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BlueprintsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.blueprints.<a href="/src/services/blueprints/blueprints-service.ts">headBlueprintsContent</a>(key, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified Blueprints data file were requested with the HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.blueprints.headBlueprintsContent('key', {
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**key:** `string`— Key for the downloadable output file.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadBlueprintsContentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BlueprintsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BulkSamplesOngoing

<details><summary><code>client.bulkSamplesOngoing.<a href="/src/services/bulk-samples-ongoing/bulk-samples-ongoing-service.ts">getBulkSamplesCollection</a>({ ...params }) -> CodeRustcApi.ContentCollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A collection of sample Bulk data generated in the last 7 days. Each sample file has a unique key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSamplesOngoing.getBulkSamplesCollection({
  prefix: 'prefix',
  limit: 6,
  next: 'next',
  datasetNames: 'equityNamr,equityMifidEuro',
  fileExtensions: 'cax',
  snapshotDate: '20240101',
  snapshotStartDate: '20240101',
  snapshotEndDate: '20240102',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.GetBulkSamplesCollectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSamplesOngoingClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSamplesOngoing.<a href="/src/services/bulk-samples-ongoing/bulk-samples-ongoing-service.ts">getBulkSamplesContent</a>(key, { ...params }) -> ArrayBuffer | Uint8Array | Buffer | Blob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A downloadable sample Bulk data file identified by the key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSamplesOngoing.getBulkSamplesContent('key', {
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**key:** `string`— Key for the downloadable output file.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetBulkSamplesContentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSamplesOngoingClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulkSamplesOngoing.<a href="/src/services/bulk-samples-ongoing/bulk-samples-ongoing-service.ts">headBulkSamplesContent</a>(key, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified Bulk sample data file were requested with the HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkSamplesOngoing.headBulkSamplesContent('key', {
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**key:** `string`— Key for the downloadable output file.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadBulkSamplesContentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BulkSamplesOngoingClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## HistoryCubes

<details><summary><code>client.historyCubes.<a href="/src/services/history-cubes/history-cubes-service.ts">getHistoryCubesCollection</a>({ ...params }) -> CodeRustcApi.ContentCollectionItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A collection of downloadable History Cubes data files. Each file has a unique key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.historyCubes.getHistoryCubesCollection({
  prefix: 'prefix',
  limit: 938,
  next: 'next',
  packageCodes: 123,
  datasetNames: 'equityNamr,equityMifidEuro',
  snapshotStartDate: '20240101',
  snapshotEndDate: '20240102',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.GetHistoryCubesCollectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HistoryCubesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.historyCubes.<a href="/src/services/history-cubes/history-cubes-service.ts">getHistoryCubesContent</a>(key, { ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A downloadable History Cubes data file identified by the key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.historyCubes.getHistoryCubesContent('key', {
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**key:** `string`— Key for the downloadable output file.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetHistoryCubesContentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HistoryCubesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.historyCubes.<a href="/src/services/history-cubes/history-cubes-service.ts">headHistoryCubeContent</a>(key, { ...params })</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the headers that would be returned if the specified History Cubes data file were requested with the HTTP GET method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.historyCubes.headHistoryCubeContent('key', {
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**key:** `string`— Key for the downloadable output file.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.HeadHistoryCubeContentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HistoryCubesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Fields

<details><summary><code>client.fields.<a href="/src/services/fields/fields-service.ts">getFields</a>({ ...params }) -> CodeRustcApi.Fields</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all Bloomberg fields available under Data License (DL).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fields.getFields({
  page: 6,
  pageSize: 10,
  properties: 'Field Id',
  sort: 'sort',
  q: 'q',
  DL_Bulk: 'DL:Bulk',
  dlCommercialModelCategory: 'dlCommercialModelCategory',
  dlAvailableInGetHistory: true,
  Data_License: 'Data License',
  Platform_Static: 'Platform: Static',
  Platform_Streaming: 'Platform: Streaming',
  Platform_Terminal_Required: 'Platform: Terminal Required',
  xsd_type: 'xsd:type',
  YK_Commodity: 'YK: Commodity',
  YK_Corporate: 'YK: Corporate',
  YK_Currency: 'YK: Currency',
  YK_Equity: 'YK: Equity',
  YK_Index: 'YK: Index',
  YK_Mortgage: 'YK: Mortgage',
  YK_Money_Market: 'YK: Money Market',
  YK_Municipal: 'YK: Municipal',
  YK_Preferred: 'YK: Preferred',
  YK_US_Government: 'YK: US Government',
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.GetFieldsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fields.<a href="/src/services/fields/fields-service.ts">getField</a>(field, { ...params }) -> CodeRustcApi.Field</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the latest metadata for a given Bloomberg DL field. \> **NOTE** \> \> If the field is an enumerated field (i.e. takes on a predefined set of values), your request returns an `enumValues` attribute which provides the endpoint where you can get the list of values.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fields.getField('field', {
  api_version: '2',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field:** `string`— Field identifier. You can use either Mnemonic, Old Mnemonic, Clean Name or Field ID.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetFieldRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fields.<a href="/src/services/fields/fields-service.ts">getFieldValues</a>(field, { ...params }) -> CodeRustcApi.FieldValuesResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all the values that an `enumerated field` may take. The values can come from [one or more enums associated with the field](#tag/fields/operation/getFieldEnums).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fields.getFieldValues('field', {
  page: 9,
  pageSize: 5,
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field:** `string`— The field for which you want to see all enum values. You can use either Mnemonic, Old Mnemonic, Clean Name or Field ID.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetFieldValuesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.fields.<a href="/src/services/fields/fields-service.ts">getFieldEnums</a>(field, { ...params }) -> CodeRustcApi.FieldEnumsResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all the enums associated with a given field. An enum is essentially a set of `code`, `description` pairs. The `lookupBy` attribute indicates whether the `code` or the `description` of each associated enum is used as a `field value`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.fields.getFieldEnums('field', {
  page: 7,
  pageSize: 9,
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field:** `string`— The field for which you want to see enums. You can use either Mnemonic, Old Mnemonic, Clean Name or Field ID.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetFieldEnumsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## EnumsFields

<details><summary><code>client.enumsFields.<a href="/src/services/enums-fields/enums-fields-service.ts">getEnums</a>({ ...params }) -> CodeRustcApi.EnumsResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all enums and their definitions.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.enumsFields.getEnums({
  page: 9,
  pageSize: 9,
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.GetEnumsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EnumsFieldsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.enumsFields.<a href="/src/services/enums-fields/enums-fields-service.ts">getEnumFields</a>(enumName, { ...params }) -> CodeRustcApi.EnumFieldsResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all fields associated with a given enum, so you can identify which fields share the same set of values.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.enumsFields.getEnumFields('enum', {
  page: 9,
  pageSize: 9,
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**enumName:** `string`— The name of the enum or group of values that the field can have.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetEnumFieldsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EnumsFieldsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.enumsFields.<a href="/src/services/enums-fields/enums-fields-service.ts">getEnumValues</a>(enumName, { ...params }) -> CodeRustcApi.EnumValuesResponseSchema</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the possible values (i.e., `code` value and `description` value) that a given enum provides for each field.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.enumsFields.getEnumValues('enum', {
  page: 6,
  pageSize: 6,
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**enumName:** `string`— The name of the enum for which you want to see corresponding values.

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetEnumValuesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EnumsFieldsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Notifications

<details><summary><code>client.notifications.<a href="/src/services/notifications/notifications-service.ts">getSse</a>({ ...params }) -> CodeRustcApi.GetSseResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

# Overview An event stream providing [W3C Server-Sent Event (SSE)](https://www.w3.org/TR/eventsource/) push-notifications of Bloomberg Data License Platform activity. # Heartbeat Notifications The notification API will periodically send out empty notifications that do not have any content to keep the connection alive. These `heartbeat` notifications can be ignored. # Distribution Availability Notifications DL REST API publishes a [`Distribution`](#tag/distributions) availability notification event immediately when a distribution is published to the Bloomberg Catalog or Account Catalog, where the distribution is accessible using the credentials of the user who is subscribed to the event stream. Dataset availability notifications contain a JSON-LD payload, where the `@type` property value is set to `DistributionPublishedActivity`, and include additional metadata that allows a handler to process the notification. ## Duplicate Notifications We recommend that client processes handle the receipt of duplicate or out-of-sequence notifications. Each notification includes a `digestValue` which should be used to verify if the `Distribution` has already been processed. If the `digestValue` indicates the `Distribution` has not been seen previously, the handler should then check the `endedAtTime` timestamp. If `endedAtTime` is earlier than the most recently processed timestamp for the same `Distribution`, this indicates that a notification for a more recent version of the `Distribution` has already been processed. # Disconnections Client applications may periodically get disconnected from the notification service. When reconnecting, clients can send a `Last-Event-ID` header, as described in the SSE specification, to receive notifications that they may have missed. The `Last-Event-ID` parameter should be the most recently received SSE `id`, not the `identifier` within the notification payload. Upon reconnection, the notification service will use the `Last-Event-ID` to determine the last notification the client received, and start sending notifications from that point onward. `Last-Event-ID`s are valid for 48 hours; if a `Last-Event-ID` is received for a notification issued more than 48 hours ago, it will be ignored and the client will only receive new notifications. # Media Format Notifications will always be returned in an HTTP response with a `Content-Type` of `text/event-stream`, per the [SSE specification](https://www.w3.org/TR/eventsource/). The documentation provided for `application/ld+json` only documents the `data` field and is provided solely for viewing the notification content at [https://data.bloomberg.com/docs/HAPI/](https://data.bloomberg.com/docs/HAPI/); please download the full OpenAPI specification to view the schema for the entire SSE. # Connection Limits Each client can have up to 16 concurrent connections. Any connection exceeding this limit will be rejected with HTTP response status 429 - Too Many Requests.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.getSse({
  Last_Event_ID: 'Last-Event-ID',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.GetSseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/services/notifications/notifications-service.ts">getContentSse</a>(collection, { ...params }) -> core.Stream&lt;CodeRustcApi.GetContentSseResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

# Overview An event stream providing [W3C Server-Sent Event (SSE)](https://www.w3.org/TR/eventsource/) push-notifications of Bloomberg Data License Platform activity. # Heartbeat Notifications The notification API will periodically send out empty notifications that do not have any content to keep the connection alive. These `heartbeat` notifications can be ignored. # Distribution Availability Notifications DL REST API publishes a `ContentDelivered` notification event immediately when an output file is generated. The output file is accessible using the credentials of the user who is subscribed to the event stream. The notifications have an `event` property whose value is set to `ContentDelivered`, and include additional metadata that allows a handler to process the notification. ## Duplicate Notifications We recommend that client processes handle the receipt of duplicate or out-of-sequence notifications. Each notification includes a `Digest` which should be used to verify if the output file has already been processed. # Disconnections Client applications may periodically get disconnected from the notification service. When reconnecting, clients can send a `Last-Event-ID` header, as described in the SSE specification, to receive notifications that they may have missed. The `Last-Event-ID` parameter should be the most recently received SSE `id`, not the `identifier` within the notification payload. Upon reconnection, the notification service will use the `Last-Event-ID` to determine the last notification the client received, and start sending notifications from that point onward. `Last-Event-ID`s are valid for 48 hours; if a `Last-Event-ID` is received for a notification issued more than 48 hours ago, it will be ignored and the client will only receive new notifications. # Media Format Notifications will always be returned in an HTTP response with a `Content-Type` of `text/event-stream`, per the [SSE specification](https://www.w3.org/TR/eventsource/). Please download the full OpenAPI specification to view the schema for the entire SSE. # Connection Limits Each client can have up to 16 concurrent connections. Any connection exceeding this limit will be rejected with HTTP response status 429 - Too Many Requests.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.notifications.getContentSse(getContentSseRequestCollection, {
  Last_Event_ID: 'Last-Event-ID',
  Authorization: 'Authorization',
  JWT: 'JWT',
});
for await (const item of response) {
  console.log(item);
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection:** `CodeRustcApi.GetContentSseRequestCollection`

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.GetContentSseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Notices

<details><summary><code>client.notices.<a href="/src/services/notices/notices-service.ts">getNotices</a>({ ...params }) -> CodeRustcApi.Notices</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

When retrieving notices, pass optional parameters to filter by specific fields, search by text, paginate result sets and specify sorting. For searches, provide a string containing one or more valid values separated by commas. The response contains a limited summary of details for each notification and the other `/notices/*` endpoints should be used to obtain further notice details such as related fields, securities, exchanges, supporting attachments, etc. Pagination is cursor based. Each response will have a `next` value that can be used to move forward through the dataset. Note that the responses containing notices data will contain two separate ids. `refId` is the Reference ID that is used to identify a planned change or enhancement. Many notices may be published corresponding to one `refId` outlining impact to separate products. Additionally, if a notice is revised, a new `id` will be created but the `refId` will remain the same. Please do not store the notice `id` values long term and instead rely on `refId` and `products` information to track changes or enhancements to products. `/notices/{noticeId}` can be used to retrieve all the Notice details. Each notice `id` is included in the response when fetching notices. `/notices/{noticeId}/attachments/{attachmentKey}` Notices with attachments include attachment `attachmentKey` information in the response. `/notices/{noticeId}/securities` Notices with large list of securities require additional requests to fetch the entire list. Notices for the following products are available and can be filtered by the `products` parameter: \|Value \|Main Product \|Sub Product \| \|---------------------------\|---------------------------\|---------------------------\| \|DLBU \|Data License \|Bulk \| \|DLPS \|Data License \|Per Security \| \|DLPLUS \|Data License \|Data License Plus \| \|BVAL_CASH \|Pricing - BVAL Evaluated \|BVAL - Fixed Income \| \|BVAL_OTC \|Pricing - BVAL Evaluated \|BVAL - Derivatives \| \|B-PIPE \|B-PIPE \| \| \|DATA_DISTRIBUTION_PLATFORM \|Data Distribution Platform \| \|SAPI \|Server API \| \|

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notices.getNotices({
  products: ['DLBU'],
  refIds: [8],
  publishedStartDate: 'publishedStartDate',
  publishedEndDate: 'publishedEndDate',
  effectiveStartDate: 'effectiveStartDate',
  effectiveEndDate: 'effectiveEndDate',
  revisedOnly: true,
  cancelledOnly: true,
  changeCategories: ['BULK_DATASET_CHANGE'],
  changeDrivers: ['BLOOMBERG'],
  impacts: ['ACTION_REQUIRED'],
  distributionNames: ['distributionNames'],
  packageCodes: [2],
  dataLicenseThemes: ['COMPANY_DATA'],
  domains: ['domains'],
  eids: [7],
  fields: ['fields'],
  assetClasses: ['CDS'],
  bbgids: ['bbgids'],
  bbUniques: ['bbUniques'],
  parsekeyables: ['parsekeyables'],
  regions: ['AMER'],
  onlyFirmTargeted: true,
  keywords: 'keywords',
  limit: 237,
  next: 'next',
  sortDirection: 'ASC',
  sortField: 'effectiveDate',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.GetNoticesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NoticesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notices.<a href="/src/services/notices/notices-service.ts">getNotice</a>(noticeId) -> CodeRustcApi.Notice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch all the details of a single notice. Each notice `id` can be found in the response of `/notices`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notices.getNotice(8);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**noticeId:** `number`— ID of the notification

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NoticesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notices.<a href="/src/services/notices/notices-service.ts">getNoticeAttachment</a>(noticeId, attachmentKey) -> ArrayBuffer | Uint8Array | Buffer | Blob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Download the attached file for a single notice. Notices with attachments include attachment `key` information in the response of `/notices` and `/notices/{noticeId}`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notices.getNoticeAttachment(6, 'attachmentKey');
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**noticeId:** `number`— ID of the notification containing the requested attachment

</dd>
</dl>

<dl>
<dd>

**attachmentKey:** `string`— Attachment key for the downloadable supporting documents for notices

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NoticesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notices.<a href="/src/services/notices/notices-service.ts">securitiesByNoticeId</a>(noticeId, { ...params }) -> CodeRustcApi.SecuritiesByNoticeIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch securities by page for a given notice. Supply the page in URL query parameters. The response will contain up to 5,000 securities.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notices.securitiesByNoticeId(9, {
  page: 10,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**noticeId:** `number`— ID of the notification containing the requested securities

</dd>
</dl>

<dl>
<dd>

**request:** `CodeRustcApi.SecuritiesByNoticeIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NoticesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Auth

<details><summary><code>client.auth.<a href="/src/services/auth/auth-service.ts">getToken</a>({ ...params }) -> CodeRustcApi.GetTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Obtain an OAuth2 access token using client credentials

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.getToken({
  body: authGetTokenRequest,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CodeRustcApi.AuthGetTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
