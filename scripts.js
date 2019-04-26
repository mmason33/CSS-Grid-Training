(function($) {
    var values = {
        percents: {
            css: '.container{grid-template-columns: 75% 25%;grid-template-rows: 100% 100%;}',
            description: '',
        },
        pixels: {
            css: '.container{grid-template-columns: 200px 200px 200px;grid-template-rows: 100px 100px;}',
            description: '',
        },
        mixed: {
            css: '.container{grid-template-columns: 30% 200px calc(70% - 200px);grid-template-rows: 100px 175px;}',
            description: '',
        },
        fraction: {
            css: '.container{grid-template-columns: 1fr 5fr 1fr 25%;grid-template-rows: 5fr 1fr;}',
            description: '',
        },
        shorthand: {
            css: '.container{grid: 1fr 2fr / 1fr 2fr 1fr;}',
            description: '',
        },
        justifyStart: {
            css: '.container{grid: repeat(4, 100px) / repeat(6, 1fr); justify-items: start;}',
            description: '',
        },
        justifyEnd: {
            css: '.container{grid: repeat(4, 100px) / repeat(6, 1fr); justify-items: end;}',
            description: '',
        },
        justifyCenter: {
            css: '.container{grid: repeat(4, 100px) / repeat(6, 1fr); justify-items: center;}',
            description: '',
        },
        justifyStretch: {
            css: '.container{grid: repeat(4, 100px) / repeat(6, 1fr); justify-items: stretch;}',
            description: '',
        },
        alignStart: {
            css: '.container{grid: repeat(4, 100px) / repeat(6, 1fr); align-items: start;}',
            description: '',
        },
        alignEnd: {
            css: '.container{grid: repeat(4, 100px) / repeat(6, 1fr); align-items: end;}',
            description: '',
        },
        alignCenter: {
            css: '.container{grid: repeat(4, 100px) / repeat(6, 1fr); align-items: center;}',
            description: '',
        },
        alignStretch: {
            css: '.container{grid: repeat(4, 100px) / repeat(6, 1fr); align-items: stretch;}',
            description: '',
        },
        justifyContentStart: {
            css: '.container{grid: repeat(4, 100px) / repeat(6, 100px); justify-content: start;}',
            description: '',
        },
        justifyContentEnd: {
            css: '.container{grid: repeat(4, 100px) / repeat(6, 100px); justify-content: end;}',
            description: '',
        },
        justifyContentCenter: {
            css: '.container{grid: repeat(4, 100px) / repeat(6, 100px); justify-content: center;}',
            description: '',
        },
        justifyContentStretch: {
            css: '.container{grid: repeat(4, 100px) / repeat(6, 100px); justify-content: stretch;}',
            description: '',
        },
    };

    $('.grid-change').change(function() {
        $('.style').html(values[$('.grid-change').val()].css);
        $('.description').text(values[$('.grid-change').val()].css);
    });
})(jQuery)
