#!/bin/bash

az ad sp create-for-rbac \
  --name $1 --role contributor \
  --scopes /subscriptions/$2/resourceGroups/$3 \
  --sdk-auth