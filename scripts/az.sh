#!/bin/bash

az ad sp create-for-rbac \
  --name enginear-dev --role contributor \
  --scopes /subscriptions/74b12dcc-bd39-498b-91c0-6ad108eed2d1/resourceGroups/enginear \
  --sdk-auth