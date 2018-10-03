import panflute as pf


def action(elem, doc):
    if isinstance(elem, pf.Link) and elem.url.endswith(".md"):
        elem.url = \
            doc.get_metadata("link_suffix", "") + \
            elem.url[:-3] + \
            doc.get_metadata("link_prefix", "")
        return elem


if __name__ == '__main__':
    pf.run_filter(action)
