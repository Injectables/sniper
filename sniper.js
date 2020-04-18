var root_ul = document.getElementsByClassName("product_extras_list");
if (root_ul && root_ul[0]) {
    var $number_extra = document.getElementsByClassName("number_extra"),
        $random_extra = document.getElementsByClassName("random_extra"),
        $timer_extra = document.getElementsByClassName("timer_extra");
    if ($number_extra.length)
        for (var i = 0; i < $number_extra.length; i++) {
            fromToNumber($extra = $number_extra[i], parseInt($extra.dataset.extrafrom), parseInt($extra.dataset.extrato), parseInt($extra.dataset.extrafrequency))
        }

    function fromToNumber(t, e, a, n) {
        var r;
        e = parseInt(e), a = parseInt(a), n = parseInt(n), " " != t.textContent && "" != t.textContent || (t.textContent = e), r = setInterval(function() {
            var n = t.textContent;
            n = parseInt(n), e > a ? n >= a ? n-- : (clearInterval(r), 0 == n && (t.parentElement.style.display = "none")) : n < a ? n++ : clearInterval(r), t.textContent = n
        }, 1e3 * n)
    }
    if ($random_extra.length)
        for (i = 0; i < $random_extra.length; i++) {
            randomNumber($extra = $random_extra[i], parseInt($extra.dataset.extrafrom), parseInt($extra.dataset.extrato), parseInt($extra.dataset.extrafrequency))
        }

    function randomNumber(t, e, a, n) {
        function r() {
            var n = getRandomInt(e, a);
            t.textContent = n
        }
        e = parseInt(e), a = parseInt(a), n = parseInt(n), " " == t.textContent && r(), setInterval(r, 1e3 * n)
    }

    function getRandomInt(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    }
    if ($timer_extra.length)
        for (i = 0; i < $timer_extra.length; i++) {
            var $extra, array_extra = ($extra = $timer_extra[i]).dataset.extratime.split(","),
                dt = array_extra[2];
            countdown($extra, dt, array_extra)
        }

    function addPlural(t, e, a) {
        return a = "true" == a, " " + (e += (t = parseInt(t)) > 1 && a ? "s " : " ")
    }

    function currentDate() {
        var t = new Date,
            e = t.getTime() + 6e4 * t.getTimezoneOffset();
        return new Date(e + 36e5)
    }

    function countdown(t, e, a) {
        var n = setInterval(function() {
                var e = new Date;
                o > e ? "none" != t.parentElement.style.display && (t.parentElement.style.display = "none") : "initial" != t.parentElement.style.display && (t.parentElement.style.display = "initial");
                if ((i = r - e) < 0) {
                    if (!a[3]) return clearInterval(n), void(t.parentElement.style.display = "none");
                    var s = r - o,
                        i = s - (e - o) % s
                }
                var l = Math.floor(i / 864e5),
                    u = Math.floor(i % 864e5 / 36e5),
                    d = Math.floor(i % 36e5 / 6e4),
                    m = Math.floor(i % 6e4 / 1e3);
                l = String(l).length >= 2 ? l : "0" + l, u = String(u).length >= 2 ? u : "0" + u, d = String(d).length >= 2 ? d : "0" + d, m = String(m).length >= 2 ? m : "0" + m;
                var p = "";
                l > 0 && (p = l + addPlural(l, a[4], a[8]));
                (u > 0 || l > 0) && (p += u + addPlural(u, a[5], a[8]));
                (d > 0 || l > 0 || u > 0) && (p += d + addPlural(d, a[6], a[8]));
                (m > 0 || l > 0 || u > 0 || d > 0) && (p += m + addPlural(m, a[7], a[8]));
                t.textContent = p
            }, 1e3),
            r = new Date(e),
            o = new Date(a[1]),
            s = new Date;
        o > s && (t.parentElement.style.display = "none")
    }

    function postAjax(t, e, a) {
        var n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        return n.open("POST", t), n.onreadystatechange = function() {
            n.readyState > 3 && (200 == n.status || 401 == n.status) && a(n.status)
        }, n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.send(e), n
    }

    function getAjax(t, e) {
        var a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        return a.open("GET", t), a.onreadystatechange = function() {
            a.readyState > 3 && 200 == a.status && e(a.responseURL)
        }, a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.send(), a
    }
}
