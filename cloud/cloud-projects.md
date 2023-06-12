---
id: cloud-projects
title: Manage your Cloud projects
sidebar_label: Cloud projects
---

After you've created a Memgraph Cloud project, you can pause and resume it,
delete, backup, restore, clone and resize it.

## Create a new Memgraph Cloud project

If you are using a 14-day free trial version of Memgraph Cloud, you can create
one project that uses up to 2GB of RAM. 

If you are using a paid version of Memgraph Cloud, you can create a maximum of 3
projects with the following [rates](payment). If you need more projects, feel
free to [contact us](/help-center). 

To create a new project:

1. Click **Projects** in the left sidebar.
2. Click **Add new** button.
3. In the pop-up, enter the project name, choose the cloud region, size and
   Memgraph version and click **Next**.
4. Adjust the instance [configuration](/memgraph/reference-guide/configuration). 
5. Add a password to your project to connect to your Memgraph project and click
   **Next**. Keep in mind that Memgraph can't retrieve this password if you lose
   it. 
6. Click **Go to project** to complete the project creation.

Below is a demo video made for the launch that will take you through setting up
a new Cloud project: 

[<img alt="cloud-new-project" src={require('./data/new-project.png').default} style={{width:'30%'}}/>](https://youtu.be/Tt5KPKylU8k?t=774 "How to create Cloud project")

## Pause, resume or delete a project

When you don't need compute you can pause the project and you won't be charged
for compute as long as the project is paused. However, you will continue to be
charged for storage.

To pause a project:
1. Click **Projects** in the left sidebar.
2. Click on the project you want to pause.
3. In the **Actions** section click **Pause Project**.

To resume a project:
1. Click **Projects** in the left sidebar.
2. Click on the project you want to resume.
3. In the **Actions** section click **Resume Project**.

When you no longer need a specific project, you can delete it. Keep in mind that
you can't undo this action.

To delete a project:
1. Click **Projects** in the left sidebar.
2. Click on the project you want to delete.
3. In the **Actions** section, click **Delete Project**.
4. In the confirmation pop-up, click the **Confirm** button.

<img src={require('./data/pause-project.png').default} className={"imgBorder"}/>

Fell free to watch a demo video made for the Cloud launch that will explain
the Projects section of Memgraph Cloud where you manage projects: 

[<img alt="project-management" src={require('./data/project-management.png').default} style={{width:'30%'}}/>](https://youtu.be/Tt5KPKylU8k?t=1029 "Projects section")

## Back up a project

A project is backed up by creating a snapshot with Amazon EBS. You cannot create
a snapshot if you are using a 14-day free trial version of Memgraph Cloud.

If you are using a paid version of Memgraph Cloud, you can create a maximum of 5
snapshots with the following [rates](payment). If you need more snapshots, feel
free to [contact us](/help-center). 

The size of the snapshot is 8 GB smaller than the disk size the project is
using. If you are using 1 GB of RAM and 11 GB of disk, the snapshot size is 3GB. 

To create a snapshot:
1. Click **Projects** in the left sidebar.
2. Click on the project you want to back up.
3. In the **Actions** section, click **Create Snapshot**.
4. In the pop-up, give the snapshot a name and **Create** it.

You can manage your snapshots in the **Snapshots** view, where you can **Edit
Name** or **Delete Snapshot**.

## Restore or clone a project

You can restore or clone projects from the snapshots you've created from
existing projects.

To restore or clone a project:
1. Click **Snapshots** in the left sidebar.
2. Click on the snapshot you want to use.
3. In the **Actions** section, click **Reboot as Project**.
4. In the pop-up, give the new project a name, set password and select project
   size, then **RESTORE**.
   
## Resize a project

When your project becomes to big for the current compute, upgrade it:

1. [Back up the project](#back-up-a-project) by creating a snapshot.
2. [Clone the project](#restore-or-clone-a-project) to a bigger project.
3. [Delete the smaller project.](#pause-resume-or-delete-a-project)

If you feel your project is too small for the current compute, downgrade it:
1. Export the database (using Memgraph Lab, mgconsole, GQLAlchemy, driver or any
other tool).
2. [Create a new Memgraph Cloud project](#create-a-new-memgraph-cloud-project).
3. Use an appropriate tool to connect to the project and import the database.

## Role-base access control

Memgraph Cloud project instances come with 3 roles: `admin`, `readonly`,
`readwrite`

Users can belong to one of these three roles and the admin can grant, deny or
revoke a certain set of privileges, thereby eliminating security concerns.
Read more [how to manage user
privileges](/docs/memgraph/how-to-guides/manage-user-privileges).