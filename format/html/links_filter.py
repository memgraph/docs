import panflute as pf


def replace_md_with_html(url, doc):
    assert url.endswith(".md"), "URL has to end with .md"
    return doc.get_metadata("html_link_suffix", "") + \
        url[:-3] + \
        doc.get_metadata("html_link_prefix", "")


def action(elem, doc):
    # Skip link to the external resources.
    if isinstance(elem, pf.Link) and elem.url.startswith("http"):
        return elem

    # Append suffix to the images.
    if isinstance(elem, pf.Image) and (elem.url.endswith(".png") or
                                       elem.url.endswith(".jpg") or
                                       elem.url.endswith(".jpeg")):
        elem.url = \
            doc.get_metadata("html_link_suffix", "") + \
            elem.url
        return elem

    # Handle .md links and .md#something links.
    if isinstance(elem, pf.Link):
        base_url_anchor = elem.url.split("#")
        assert len(base_url_anchor) <= 2, "Only one # is allowed in links"
        if len(base_url_anchor) == 1 and base_url_anchor[0].endswith(".md"):
            elem.url = replace_md_with_html(elem.url, doc)
            return elem
        if base_url_anchor[0].endswith(".md"):
            elem.url = replace_md_with_html(base_url_anchor[0], doc) + "#" + \
                base_url_anchor[1]
            return elem


if __name__ == '__main__':
    pf.run_filter(action)
