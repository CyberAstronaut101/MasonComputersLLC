//$ = jQuery;
var $self;
$('input[type=radio]').on('click', function () {
    $self = $(this);
    if ($self.hasClass('is-checked')) {
        $self.prop('checked', false).removeClass('is-checked');
    } else {
        $self.addClass('is-checked');
    }
});

/*-------------------------------
    terminal linux style
-------------------------------*/
var about_me_content_displayed = false;
var $lines = $('.command p');
$lines.hide();

var lineContents = [];
var output = [];

var terminal = function () {
    var skip = 0;
    typeLine = function (idx) {
        idx == null && (idx = 0);
        var element = $lines.eq(idx);
        var content = lineContents[idx];
        if (typeof content == "undefined") {
            $('.skip').hide();
            return;
        }
        var charIdx = 0;
        var typeChar = function () {
            var rand = Math.round(Math.random() * 150) + 20;

            setTimeout(function () {
                var char = content[charIdx++];
                element.append(char);
                if (typeof char !== "undefined")
                    typeChar();
                else {
                    element.append('<br/><span class="output">' + output[idx] + '</span>');
                    element.removeClass('active');
                    typeLine(++idx);
                }
            }, skip ? 0 : rand);
        }
        element.append('[ec2-user@ip-127-0-0-1 ~]$ ').addClass('active');
        typeChar();
    }

    $lines.each(function (i) {
        lineContents[i] = $(this).text();
        output[i] = $(this).next('span').html();
        $(this).text('').show();
    });


    typeLine();
}

// terminal();
$(window).scroll(function () {
    var hT = $('#terminal-start').offset().top,
        hH = $('#terminal-start').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop() - 250;
    // this.console.log("ws:" + wS);
    // this.console.log("compare: " + (hT + hH - wH));
    if (wS > (hT + hH - wH) && !about_me_content_displayed) {
        about_me_content_displayed = true;
        terminal();
    }
});// end terminal style -------








console.log("We Do Not Inherit the Earth from Our Ancestors; We Borrow It from Our Children");