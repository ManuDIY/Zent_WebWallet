#!/usr/bin/env bash
HOST_URI='https://wallet.zent.cash' \
HOST_PORT=':443' \
USER_URI='http://localhost:8081' \
WALLET_URI='http://localhost:8082' \
go run main.go utils.go
