use code_rustc_api::{ApiClient, ClientConfig};

#[tokio::main]
async fn main() {
    let config = ClientConfig {};
    let client = ApiClient::new(config).expect("Failed to build client");
    client.imdb_get_movie("tt1234").await;
}
