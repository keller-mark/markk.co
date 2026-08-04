# Why implement a data visualization toolkit in Rust?

I am happy to share [Pluot](https://pluot.dev), a new library for creating data visualizations.

Of course, developing a new plotting library is always a bit like the classic XKCD comic:

[![How standards proliferate meme from XKCD](https://imgs.xkcd.com/comics/standards.png)](https://xkcd.com/927/)

Have we created something useful, or just an additional competing thing?
Here, I describe my motivations for this work, and leave it to you to decide.


> Update (August 2026): *I have updated this post to reframe the problem and interleave slides from a recent [presentation](https://scientificcomputing.rs/2026/talks/keller.html).*


## Motivations


The size and complexity of modern datasets, such as those generated during scientific research experiments, often cannot be easily distilled into a small number of static figures (e.g., figures within a journal paper).
While journal figures remain valuable precisely because they require the original researchers to compress their findings into those that they perceive as most impactful, each reader of a scientific researcher also arrives with their own interests and questions (e.g., their own favorite gene).


Interactive data portals address this challenge: a user can arrive with their own questions, querying large and high-dimenensional scientific datasets and rendering visualizations on-demand.
The web-based nature of many such data portals also democratizes access: the user does not need to fiddle with installing a native app and does not need to download the (increasingly large) datasets in order to view the visualizations.

<!--Not only are there user experience benefits to web-based visualization tools, but also developer experience ones: the web development ecosystem has come a long way, and there are many open-source web visualization toolkits that help developers to avoid reinventing the wheel.-->


![Slide 1](/blog-images/pluot_slide_1.svg)


## The problem

The development of interactive visualization tools and the creation of static publication figures are complementary processes.
However, these processes are most often performed with separate software toolkits and programming languages, sharing almost zero code.
Yet these processes often rely on the same input data and data formats, use similar visualization designs, and have overlapping audiences.


![Slide 2](/blog-images/pluot_slide_2.svg)


<!--This disconnect is frustrating: we seem to have convinced ourselves that it is acceptable for these processes to be separate.
In other words, we tell ourselves that it is fine to use interactive tools for data exploration, as we only use these for hypothesis generation.
Upon finding something interesting via an interactive tool, we will perform data analysis to confirm our finding is significant, during which we will write scripts to generate static plots for our publication figures.
-->
Thinking about these as separate processes (i.e., exporation and hypothesis generation -> interactive; confirmation and communication -> static) makes it easier to justify the usage of different software toolkits during them.
We tell ourselves that using a WebGL-based interactive tool in the former phase and creating a ggplot in the latter phase is perfectly fine!


And it _is_ fine in many cases.<!--, but in my experiences the types of visualizations being created in the interactive and static cases are __not all that different__, so ideally more of our visualization software could be reused in these different settings.
Current solutions to bridge the gap between web-based interactive plotting and reproducible publication-ready static plotting are hacky at best.
But we should not be content with the fact that we reach for these entirely separate software toolkits!-->
But it gnaws at me to pour time and effort into developing specialized software to power web-based interactive tools, while knowing that __entirely separate__ software toolkits will be used to create any downstream static publication figures.



So why does the field of visualization software need to keep reinventing the wheel?

![Slide 4](/blog-images/pluot_slide_4.svg)

## The wish list

As visualization researchers, why not _map out the design space_ and create a solution that satisfies everyone's needs? 


Looking more broadly at how we select visualization toolkits, there are often additional dimensions to consider besides simply "static vs. interactive".
We often also need to consider the preferred programming language, whether we want bitmap vs. vector graphics, and whether we are rendering basic statistical plots vs. volumetric/mesh/3D ("InfoVis vs. SciVis").

![Slide 3](/blog-images/pluot_slide_3.svg)

<!--![Siloed ecosystems](/blog-images/datavis-silos-v2.png)-->


<!--Both software toolkits often use the same fundamental logic, techniques, and algorithms -- without reusing any of the code!--> <!--yet the web-based implementations cannot be easily reused in data science contexts, and vice-versa.-->
<!--Shouldn't we aim to reduce these duplicate software development efforts (improving reproducibility in the process)?-->







Based on my experiences, the following characteristics are required for any such solution:


- The same code can be used **across programming languages**, including in web browser, without requiring web browser in desktop case.
- The same code can power **static and interactive** visualization rendering.
- **Scalability** to out-of-core dataset sizes.
- The same code can be used for **bitmap and vector graphics** output.
- **Small** WASM binary size (disclaimer: subjective).
- **Decoupled** from coordinated multiple views implementation.
- **Decoupled** from UI framework and event loop management.

(The latter two criteria simplify the scope of the problem and allow for developers to use their favorite state management and UI frameworks, which also change rapidly over time.)

![Slide 6](/blog-images/pluot_slide_6.svg)

Satisfying such a wish list has historically been difficult, primarily for technical reasons.
<!--Interactive tools often use bitmap-based rendering, via the HTML Canvas or WebGL APIs, to ensure high performance and scalability.
We often favor quality when static plotting, using SVG or PDF vector-based rendering.
Web software solutions are limited to using web technologies (JS/TS/HTML/CSS/WebGL), while static plotting often occurs in the data science environments of Python or R.
We often favor quality when static plotting, using SVG or PDF vector-based rendering.-->



## The proof of concept




In a 2024 [report](https://shonan.nii.ac.jp/docs/No.193.pdf) titled "The Moving Target of Visualization Software", Gillmann et al. remark on the potential for WebGPU and WebAssembly to be used to implement "write once, run everywhere" visualization software.

![Slide 5](/blog-images/pluot_slide_5.svg)


WebAssembly allows us to efficiently run software developed using systems programming languages in the web browser, and the new WebGPU API offers an ergonomic way to do GPU-accelerated rendering in the web browser.
Specifically, the Rust programming language ecosystem offers tools to easily compile Rust code to WebAssembly (wasm-pack, wasm-bindgen, etc) and [WGPU](https://github.com/gfx-rs/wgpu) is a Rust-based implementation of WebGPU that can be run both inside and outside the browser (in fact, WGPU is how the WebGPU API is implemented under-the-hood in Firefox).
By the end of 2025, WebGPU was supported in [all three major web browsers](https://github.com/gpuweb/gpuweb/wiki/Implementation-Status).


> Side note: 
> "Great," you say! We can just take our existing native apps for visualization and compile them to run in the browser with WebAssembly! While possible, this is much easier said than done. These native applications are often large and complex, built over a long time assuming that all of the usual native app capabilities are available: filesystem, concurrency, etc. When building for the web there are additional constraints to consider, such as the application bundle size and user network speed.
>
> For better or worse, rather than trying to squeeze a legacy native application code into these constraints it was not designed to satisfy, it can be quicker (and with fewer headaches) to build a solution from scratch, with the constraints considered from the beginning.
>
> An alternative approach is to do the opposite: reuse existing web-based visualization code in native contexts. If you want to avoid depending on a full web browser, the best way to do this is via a standalone JavaScript runtime, as done by [vl-convert](https://medium.com/@jonmmease/introducing-vlconvert-c763f0076e89). The advantage of this approach is that you can reuse most JavaScript code (caveat: the JS code must not be too tightly coupled to the browser), making it great from a reproducibility standpoint. The disadvantage is that there is still some overhead to using the JavaScript runtime (disclaimer: it would require benchmarking to confirm the exact performance tradeoffs). For many users and use-cases, this may be plenty good enough.



So, we can now implement our visualizations in Rust using WGPU, but what about usage from data science environments?
Luckily, it is straightforward to create bindings to Rust programs from other languages such as Python.


The next key insight (or maybe just lie I told myself) is that it only takes a few key elements to go a long way to creating a visualization.
Just being able to render circles, rectangles, and text can allow us to implement scatterplots, line charts, and bar charts!
When it comes to interactivity, there are also only a small number of crucial interactions: clicking, hovering (tooltips), scrolling (zooming), and dragging (panning, brushing, lassoing).
Seems easy enough!


We just need to implement a plot rendering function, and return the bytes back to the calling language!
If this is fast enough, then it will be feasible to execute such a rendering function on every frame (of a user interaction or animation), enabling us to use the same plotting function to generate both interactive and static plots.
And with a little extra work, we can also implement SVG variants of each plotting function.


I set out to implement a proof of concept to determine whether this was feasible.
I made my initial commit in August of 2025, marking the start of the Pluot project.
A week later, I had gotten some (very basic) interactive Rust+WGPU rendering working in the browser via WASM bindings.
With a few more days, I got proof-of-concept Python bindings working.
However, it took until early 2026 to polish this proof of concept and get many other features working: text rendering, async data loading, cacheing, coordinate systems, aspect ratio handling, margins, vector rendering, and a layered plotting API -- to the point that I can now claim Pluot addresses the goals of the original wish list.


![Slide 11](/blog-images/pluot_slide_11.svg)

<!--
### When does performance improvement lead to a paradigm shift?

Many paradigm shifts in software development have arisen from efficiency gains.
The introduction of React, with its efficient virtual DOM diff-ing algorithm, led to simplified mental models for frontend developers.
Similarly, the performance of the Python package management tool UV has shifted paradigms and expectations in the Python ecosystem, changing how developers think about virtual environments.
In the UV case, these performance characteristics can be attributed at least in part to the usage of Rust for its implementation.
Will usage of Rust and WebGPU for data visualization lead to a paradigm shift in the information visualization software ecosystem?
-->

<!--![Unified ecosystems](/blog-images/datavis-silo.png)-->

## Embracing stateless, declarative paradigms


In addition to WebGPU, WebAssembly, and the Rust ecosystem (pyo3, rextendr), the Pluot architecture is made possible in large part due to embracing stateless, declarative paradigms.
For example, we treat interactive plotting as rendering multiple static frames.

![Slide 8](/blog-images/pluot_slide_8.svg)

We treat camera updates upon zoom/pan interactions as stateless functions which return a new camera matrix, given the previous camera matrix and the mouse event.

![Slide 12](/blog-images/pluot_slide_12.svg)

Inspired by declarative grammars of graphics and frameworks such as [DeckGL](https://github.com/visgl/deck.gl), we define a layered plotting API. This layered API makes it easy to compose existing layers to define more complex layers.

![Slide 9](/blog-images/pluot_slide_9.svg)

## Scalable data loading

To scale to out-of-memory dataset sizes, we use [Zarr](https://zarr.dev/) via the [Zarrs](https://github.com/zarrs/zarrs) Rust implementation.

![Slide 13](/blog-images/pluot_slide_13.svg)

Crucially, we use Zarr to load not only data that conforms to the Zarr array format, but also to load arbitrary binary data.

![Slide 10](/blog-images/pluot_slide_10.svg)


The [composable](https://github.com/manzt/zarrita.js/issues/349) nature of Zarr stores, enabling [virtualization](https://github.com/zarr-developers/VirtualiZarr) from legacy formats without modifying data on-disk, has also made Zarr a great fit for this project.
It also helps that the datasets I work with in the single-cell and spatial biology domain and their communities have adopted Zarr, namely, [AnnData](https://github.com/scverse/anndata/blob/main/docs/fileformat-prose.md), [SpatialData](https://spatialdata.scverse.org/en/stable/design_doc.html), and [OME-Zarr](https://ngff.openmicroscopy.org/).


## Related work



As I went down this rabbit hole, I kept thinking to myself that I couldn't be the first person to think about this problem.
I came across [many](https://github.com/keller-mark/awesome-rust-vis/) open-source projects that seemed quite similar, but none that seemed to check all of the boxes of being fast, scalable, bitmap+vector, static+interactive, and interoperable (with bindings to multiple langauges, including web), and with a **reasonable WASM bundle size** (e.g., <10 MB).
This final point turns out to be especially tricky, as it is easy to inadvertently add Rust crate dependencies that significantly increase the resulting WASM bundle size.
Similarly, it is easy to add Rust crate dependencies that make WASM compilation difficult for one reason or another (e.g., depend on a C library that is tricky to compile to WASM) or use concurrency features (Rust's Send and Sync) in a way that prevents WASM compilation.<!--I found several projects that checked many of the boxes, but none that checked all of them!-->
Identifying this gap motivated me to continue to push the project along, especially once I had established the feasibility via the initial experiments.


While not yet production-ready, Pluot demonstrates the potential for a paradigm shift in how we create reproducible, performant, and cross-platform static and interactive visualizations.



## Learn more

Here, I have focused on the personal motivations behind this project.

If you are interested in learning more, check out the [Pluot repository](https://github.com/keller-mark/pluot), [website](https://pluot.dev), or [preprint](https://doi.org/10.48550/arXiv.2605.14118).
There are still many open questions, some of which are listed in the [GitHub issues](https://github.com/keller-mark/pluot/issues?q=sort%3Aupdated-desc+is%3Aissue+is%3Aopen).
