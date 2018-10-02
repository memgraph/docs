$(document).ready(function () {
    var supportedLanguages = {
        python: 'python',
        java: 'text/x-java',
        javascript: 'text/javascript',
        csh: 'text/x-csharp',
        opencypher: 'application/x-cypher-query',
        bash: 'text/x-sh',
        csv: 'text/x-sh'
    };

    // Retrieve a CodeMirror Instance via jQuery.
    function getCodeMirrorJQuery(target) {
        var $target = target instanceof jQuery ? target : $(target);
        if ($target.length === 0) {
            throw new Error('Element does not reference a CodeMirror instance.');
        }

        if (!$target.hasClass('CodeMirror')) {
            if ($target.is('textarea')) {
                $target = $target.next('.CodeMirror');
            }
        }

        return $target.get(0).CodeMirror;
    };

    var memgraphOverlay = {
        token: function (stream) {
            if (stream.match("bfs")) {
                return "memgraph-keyword";
            }
            if (stream.match("wShortest")) {
                return "memgraph-keyword";
            } else {
                stream.next();
                return null;
            }
        }
    };

    $('code').each(function (index, code) {
        var parentClasses = ($(this).parent().attr('class') || '').split(' ');
        var classes = ($(this).attr('class') || '').split(' ');
        var lang = classes.concat(parentClasses).find(function (className) {
            return supportedLanguages[className];
        });

        if (lang) {
            var textAreaId = 'code-' + index;
            var copyButtonId = 'copy-btn-' + index;
            $(this).html($('<div><button id="' + copyButtonId + '">COPY</button><textarea id="' + textAreaId + '">' + $(this).text() + '</textarea></div>'));
            CodeMirror.fromTextArea($('#' + textAreaId).get(0), {
                mode: supportedLanguages[lang],
                theme: 'memgraph',
                lineWrapping: true,
                readOnly: true
            }).addOverlay(memgraphOverlay);

            new ClipboardJS('#' + copyButtonId, {
                text: function () {
                    var code = getCodeMirrorJQuery('#' + textAreaId + ' ~ .CodeMirror').getDoc().getValue() || '';
                    var lines = code.split('\\\n').map(function (line) {
                        return line.trim();
                    });
                    return lines.join(' ');
                }
            });
        }
    });
});
