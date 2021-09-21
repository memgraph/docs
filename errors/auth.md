---
id: auth
title: Auth module errors
sidebar_label: Auth module
---

import Help from './templates/_help.mdx';

<Help/>

## Errors

1. [Couldn't authenticate user '{}' using the auth module because the user
   already exists as a role. For more details, visit: memgr.ph/auth.](#error-1)
2. [Couldn't authenticate user '{}' using the auth module because the user
   doesn't exist. For more details, visit: memgr.ph/auth.](#error-2)
3. [Couldn't authenticate user '{}' using the auth module because the user's
   role '{}' already exists as a user. For more details, visit:
   memgr.ph/auth.](#error-3)
4. [Couldn't authenticate user '{}' using the auth module because the user's
   role '{}' doesn't exist. For more details, visit: memgr.ph/auth.](#error-4)
5. [Couldn't authenticate user '{}' because the user doesn't exist. For more
   details, visit: memgr.ph/auth.](#error-2)
6. [Couldn't authenticate user '{}'. For more details, visit:
   memgr.ph/auth.](#error-5)

## The user already exists as a role {#error-1}

Change the name of the user or the role as there can't be duplicates.

## The user doesn't exist {#error-2}

By using the `--auth-module-create-user` flag, you can specify if a missing user
should be created.

## The role already exists as a user {#error-3}

Change the name of the user or the role as there can't be duplicates.

## The role doesn't exist {#error-4}

By using the `--auth-module-create-user` flag, you can specify if a missing user
should be created.

## Couldn't authenticate user {#error-5}

The password for the user was wrong.

import SubmitError from './templates/_submit-error.mdx';

<SubmitError/>
