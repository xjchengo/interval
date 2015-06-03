if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

$.interval = function(url) {
    if (!url) {
        url = 'interval.php';
    }
    var interval = $.Deferred();
    var start_time, end_time;
    $.ajax({
        url: url,
        dataType: 'json',
        beforeSend: function() {
            start_time = Date.now();
        }
    }).done(function(time) {
        var interval_time;
        end_time = Date.now();
        interval_time = Math.round(time.request_time - (start_time + (end_time - start_time - (time.response_time - time.request_time))));
        interval.resolve(interval_time);
    });
    return $.when(interval.promise());
};
