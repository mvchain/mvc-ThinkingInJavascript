window.onload = function () {
    const URL = 'http://127.0.0.1:3000/';
    const $ = function (r) {
        if (r.includes('#')) return document.getElementById(r.replace('#', ''));
        return document.querySelectorAll(r);
    };
    const postForm = function () {
        var data = {};
        $('[name]').forEach(function (val) {
            data[val.getAttribute('name')] = val.value;
        });

        var opts = {
            method: 'POST', // GET, POST, DELETE, PUT
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        fetch(URL + 'user/login', opts).then(function(res){
            console.log(res)
        }).catch(function(error){
            console.log(error)
        });
    };

    $("#btn").addEventListener('click', postForm)
    function getArea(shape, options) {
        let area = 0;

        switch (shape) {
            case 'Triangle': // 魔术字符串
                area = .5 * options.width * options.height;
                break;
            /* ... more code ... */
        }
        return area;
    }

    getArea('Triangle', { width: 100, height: 100 }); // 魔术字符串
    // for (let ky of window) {
    //     console.log(ky)
    // }
    console.log(window['btn'])
};

