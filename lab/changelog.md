---
id: changelog
title: Changelog
sidebar_label: Changelog
---

## v1.3.3

### Bug Fixes

- Fixed the action of exporting the database to a `cypherl` file.
- Added support for the temporal types in query responses.

## v1.3.2

### Bug Fixes

- Fixed the copy to clipboard bug with removed spaces.
- Updated the Cypher IntelliSense with the latest commands.

## v1.3.1

### Major Features and Improvements

- Signed the Memgraph Lab applications for macOS and Windows.

### Bug Fixes

- Fixed the paste overwrite action in the query editor.
- Fixed the bug `Cannot read property 'class' of null`.

## v1.3.0

### Major Features and Improvements

- Added option to show predefined datasets with the ability to import them to
  Memgraph.
- Added option to show sample query for every loaded predefined dataset.
- Added import of custom Cypher file datasets (`cypherl` format).
- Added export of current database state to Cypher file (`cypherl` format).
- Added default node label in graph view if name property is missing.
- Added default relationship type label in graph view for smaller graphs.

### Bug Fixes and Other Changes

- Fixed sidebar links in the browser Lab.
- Fixed columns in favorite queries view.
- Fixed showing large amounts of properties in a popup when viewing node details
  in the graph view.
- Fixed the label in the popup when switching between edges and nodes in the
  graph view.
- Fixed node count in the dashboard view.
- Added descriptive and better error messages when connecting to Memgraph with
  encryption on/off.
- Fixed the close button in a node popup in the graph view.
- Fixed the spacing of the close button and relationship type in a relationship
  popup in the graph view.
- Fixed storing physics and styles across multiple query runs.
- Fixed initial positioning in graph view when running query in the data view.
- Fixed graph view reset when a query on data view had no results to show.
- Fixed map disappearing when running query multiple times in a row.
- Fixed running multiple Lab instances of the application on Windows and Linux.
- Fixed node size and spacing in graph view when showing smaller graphs.
- Fixed transition state issues between graph view and data view.

## v1.2.0

### Major Features and Improvements

- Added ability to create custom graph styling for nodes and edges in graph view
  with graph style language (similar to CSS).
- Added ability to save and load custom graph styling.
- Added ability to show map background for nodes with lat and lng numeric
  properties.
- Added ability to change map background style.
- Removed edge labels to be shown by default in graph view.
- Fixed overall UI and UX.
- Set encrypted connection to be turned off by default on login screen (Memgraph
  v1.2.0 comes with SSL off by default).

### Bug Fixes

- Added ability to hide graph view if there are no node/edge data in response.

## v1.1.0

### Major Features and Improvements

- Enable explain and profile view.
- Memgraph v0.15.0 keywords support.

### Bug Fixes and Other Changes

- Fix bug with a new line in parsing multi-command queries.
- On empty data for graph redirect to data view.

## v1.0.0

### Major Features and Improvements

- Added unsecure connection option.
- Improved UX of login screen.
- Added basic tutorial that shows on the initial run.
- Added text search of history and favorite queries.
- Added storage statistics on overview screen.
- Added debug view with query explain and profile capabilities.
- Added graph schema (metagraph) generator.
- Improved query data (table) view.

## v0.1.2

### Bug Fixes and Other Changes

- Fixed app icon on MacOS.
- Improved error handling on the initial connect screen. Handle availability and
  secure connection errors.

## v0.1.1

### Major Features and Improvements

- Added overview view.
- Added query view (Monaco editor).
- Added graph, data and table data views.
- Added JSON export.
- Added electron builder packages for MacOS and Debian.
