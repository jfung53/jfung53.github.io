(function () {
    var projects = [
        { slug: "school-shootings" },
        { slug: "citi-bikes" },
        { slug: "masculinity-bot" },
        { slug: "evictions" },
        { slug: "pool-incidents" },
        { slug: "historical-map" },
        { slug: "shsat" }
    ];

    // slug = directory right before index.html
    var parts = window.location.pathname.split("/");
    if (parts.length < 3) return;
    var currentSlug = parts[parts.length - 2];
    var currentIndex = projects.findIndex(function (p) { return p.slug === currentSlug; });
    if (currentIndex === -1) return;

    var prev = projects[(currentIndex - 1 + projects.length) % projects.length];
    var next = projects[(currentIndex + 1) % projects.length];
    var href = function (slug) { return "../" + slug + "/index.html"; };

    // Header arrows
    var headerPrevNext = document.querySelector("header.portfolio-header nav.portfolio-navigation .prev-next");
    if (headerPrevNext) {
        headerPrevNext.innerHTML =
            '<p><a href="' + href(prev.slug) + '"><span class="bracket">[</span><span class="nav-label"> &lt; </span><span class="bracket">]</span></a></p>' +
            '<p><a href="' + href(next.slug) + '"><span class="bracket">[</span><span class="nav-label"> &gt; </span><span class="bracket">]</span></a></p>';
    }

    // Footer links: rebuild to ensure consistency
    var footerNav = document.querySelector("footer.portfolio-footer nav.portfolio-navigation");
    if (footerNav) {
        footerNav.innerHTML =
            '<p><a href="../index.html"><span class="bracket">[ </span><span class="nav-label">home</span><span class="bracket"> ]</span></a></p>' +
            '<p><a href="' + href(next.slug) + '"><span class="bracket">[ </span><span class="nav-label">Next Project</span><span class="bracket"> ]</span></a></p>';
    }
})();


