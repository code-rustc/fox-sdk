use code_rustc_api::{ApiClient, ClientConfig};

#[tokio::main]
async fn main() {
    let config = ClientConfig {};
    let client = ApiClient::new(config).expect("Failed to build client");
    client
        .imdb_create_movie(serde_json::json!({"title":"title","rating":1.1}))
        .await;
}
