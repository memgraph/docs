---
id: connectparams
title: Struct rsmgclient::ConnectParams
sidebar_label: ConnectParams
---

## Declaration

```rust
pub struct ConnectParams {
    pub port: u16,
    pub host: Option<String>,
    pub address: Option<String>,
    pub username: Option<String>,
    pub password: Option<String>,
    pub client_name: String,
    pub sslmode: SSLMode,
    pub sslcert: Option<String>,
    pub sslkey: Option<String>,
    pub trust_callback: Option<*const dyn Fn(&String, &String, &String, &String) -> i32>,
    pub lazy: bool,
    pub autocommit: bool,
}
```

Parameters for connecting to database.

Validation of parameters is performed while calling `Connection::connect`.

## Examples

Connecting to localhost database, running on default port 7687.

```rust
use rsmgclient::{ConnectParams, Connection};

let connect_params = ConnectParams {
    host: Some(String::from("localhost")),
    ..Default::default()
};

let mut connection = match Connection::connect(&connect_params) {
    Ok(c) => c,
    Err(err) => panic!("{}", err)
};
```

## Fields

* `port: u16` Port number to connect to at the server host. Default port is 7687.

* `host: Option<String>` DNS resolvable name of host to connect to. Exactly one of host and address parameters must be specified.

* `address: Option<String>` Numeric IP address of host to connect to. This should be in the standard IPv4 address format. You can also use IPv6 if your machine supports it. Exactly one of host and address parameters must be specified.

* `username: Option<String>` Username to connect as.

* `password: Option<String>` Password to be used if the server demands password authentication.

* `client_name: String` Alternate name and version of the client to send to server. Default is "MemgraphBolt/0.1".

* `sslmode: SSLMode` Determines whether a secure SSL TCP/IP connection will be negotiated with the server. Default value is `SSLMode::Require`.

* `sslcert: Option<String>` This parameter specifies the file name of the client SSL certificate. It is ignored in case an SSL connection is not made.

* `sslkey: Option<String>` This parameter specifies the location of the secret key used for the client certificate. This parameter is ignored in case an SSL connection is not made.

* `trust_callback: Option<*const dyn Fn(&String, &String, &String, &String) -> i32>` After performing the SSL handshake, `Connection::connect` will call this function providing the hostname, IP address, public key type and fingerprint and user provided data. If the function returns a non-zero value, SSL connection will be immediately terminated. This can be used to implement TOFU (trust on first use) mechanism.

* `lazy: bool` Initial value of `lazy` field, defaults to true, Can be changed using `Connection::set_lazy`.

* `autocommit: bool` Initial value of `autocommit` field, defaults to false. Can be changed using `Connection::set_autocommit`.