<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->

Welcome to the Thinternet! The Thinternet is a side project by two IT nerds with big PCs, networking gear, over a dozen decommissioned thin clients, and enough knowledge to cause chaos. It covers two projects: a big Docker Swarm, and a thin client LAN party.

## BFC (the Docker Swarm)

The big Docker Swarm cluster, lovingly named the Big Fucking Cluster, is comprised of 18 thin clients of three different models:

- 2x Igel D220, serving as manager nodes
- 1x Igel D210, also serving as a manager node
- 15x Dell Wyze 5010, serving as worker nodes.

The manager nodes are also configured to accept jobs and act as workers, if need be.

This project exists purely to satisfy our desire to see a Docker Swarm with an obnoxiously large node count &mdash; so large that we struggle to find enough things to run to actually make use of it all.

## LAN Party in a Box

The second project is what we're calling the LAN Party in a Box. It requires far more than one box to pull off, but "LAN Party in Several Boxes" isn't as satisfying.

This project envisions a Minecraft LAN party, where the server(s) and clients are all running on one (or two, in our case) gaming PCs, and each participant plays via thin client and Citrix. 

This project is a far more "practical" and "realistic" implementation of a thin client-based endpoint architecture. Every element of a proper high-performance Citrix deployment is here:

- Active Directory (with redundant DCs &mdash; we're professionals here)
- A file server for roaming profiles
- Multiple Citrix Virtual Apps and Desktops hosts
- Multi-gig networking between the physical hosts and to the thin client network
