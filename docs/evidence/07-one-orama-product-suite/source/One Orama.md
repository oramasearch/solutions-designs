Orama is changing.

We’ll acquire Clustera, a separate, but similar, tech company, and its tech and founders.

Clustera will handle the professional services fulfillment for onboarding clients into orama cloud.

We merge all of these existing products into one product, orama cloud v3:

1. Orama cloud v1  
2. Orama cloud v2  
3. Clustera  
4. ZettaDB / Orama Zetta

Additionally, a second build target will be created, orama search desktop:

1. Zetta DB watered down

A third product, Orama Zetta, is the current, headed, desktop app (current build).

Orama Zetta (Desktop) will connect to your cloud, create a k8s cluster, and deploy the orama operator inside of it.

The operator will connect to orama zetta. They have a symbiotic relationship. The operator creates nodes of zetta. Zetta is also the data store for the operator. So, when the operator needs some data or information, it talks to zetta. And when zetta needs the operator to do something on k8s, it updates its internal data that gets picked up by the operator. It’s bi-directional communication. They also bootstrap each other. The desktop bootstraps the cluster and operator. The operator then bootstraps the zetta nodes inside the k8s cluster. The zetta desktop acts as both a zetta node and a rich desktop application (for video-game level graphics, latency, but also data locality).

During the hectic period (the dust settling) of product integrations, we’ll have many components managed by the orama operator. As it settles, we’ll slowly replace all of the datastores with zetta.

Orama Zetta is auto-ai for enterprise. It’s what’s represented on the current marketing site ([orama.com](http://orama.com)).

[Oramasearch.com](http://Oramasearch.com) is the current home of Orama Cloud v2. After the migration it will redirect to [orama.com](http://orama.com), which will like the four products in our product suite.

[app.orama.com](http://app.orama.com) is the current home of Orama Cloud v1

That is the current state.

The future state is a single product suite of 4 products:

1. OramaJS: our current OSS (free) solution.  
2. Orama Search Desktop (search-only desktop app) $49 one-time for a major version license  
3. Orama Cloud v3 \- pro plan ($200/mo plus 4 hours of onboarding for $125/hr) discount for annual pricing. It’s very light on the features. Basically just agentic search. It’s what Orama Cloud v1, v2, and Clustera offered.  
4. Orama Cloud v3 (Orama Zetta) \- enterprise plan ($500k/year+ either onprem / dedicated / dedicated cloud hosted, or both).

Orama Zetta has two supported use cases (to start):

1. Priority: Churn model pipeline (Motive design partner)  
2. Secondary: Automated Email outbound

These two use cases are the first of a huge catalog of supported use cases. Each module has its own pricing.

They’re all anchored by Orama Zetta’s own agentic RL base model (which is a third use case as well).

Our migration will need to migrate the current, scattered, AWS-hosted orama cloud v1 into k8s-hosted orama cloud v1, which will then fold all of the other products into it.

We don’t want any downtime for this migration. Users will be able to have full backward compatibility. The default UI will be the new Orama Zetta, but the old UI (current orama cloud v1, the dashboard) will be selectable as well (in addition to the orama cloud v2 UI).

Inside the Orama Zetta web and desktop UI, we should have Orama Marketing Cloud, and Orama Churn Cloud.

The orama zetta desktop will have a rich UI. Kind of like blender or roblox or k8s lens or worktree manager.

It currently uses modern c++ and [https://wiki.libsdl.org/SDL3/FrontPage](https://wiki.libsdl.org/SDL3/FrontPage) and imgui. Imgui is a crutch to get the ui up and running quickly. We should prefer custom, SDL3, UI, controlling every pixel into a beautiful, cross-platform UI. That is the desktop experience (headed). There’s also the headless mode (with just the node running, that also serves the desktop web and mobile web versions). That uses straight c++ and html (no react and very, very minimal clientside javascript for maximal browser performance).

Eventually, all of Orama will run on AI itself. Orama (the company) will use Orama Zetta to automate nearly its entire company. Social media posts, software engineering, sales, etc., etc.

We will create additional use cases as we do this.

In this way, Orama Zetta becomes *the* platform to run 100% automated business, supporting a 100% automated portfolio of businesses.

We have to break this down into stages. We want all of this integrated into the orama operator. We want to plan the zero downtime migration and we want to decommission the old hardware once a safe 2 week window has passed–to support a safe cutover/cutback strategy.

Orama Zetta’s current MCP Service will be the voice of the platform. Let’s use it to envelop all other components and services. You need to ask before integrating any functionality into that mcp server. Remember: eventually, all functionality will be in the zetta codebase (and the operator). No postgres. No rabbitmq. No clickhouse. Nothing. All of it becomes zetta, in keeping with zetta’s design.