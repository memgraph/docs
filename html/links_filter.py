import panflute as pf


def action(elem, doc):
    if isinstance(elem, pf.Link) and elem.url.endswith(".md"):
        elem.url = \
            doc.get_metadata("link_suffix", "") + \
            elem.url[:-3] + \
            doc.get_metadata("html_link_prefix", "")
        return elem
    if isinstance(elem, pf.Image) and elem.url.endswith(".png"):
        elem.url = \
            doc.get_metadata("link_suffix", "") + \
            elem.url
        return elem


if __name__ == '__main__':
    pf.run_filter(action)
