setTimeout(
    function(name) {
        var catList = name + ", ";
        setTimeout(
            function(name) {
                catList += name + ", ";
                setTimeout(
                    function(name) {
                        catList += name + ", ";
                        console.log('catList: ', catList)
                    },
                    1,
                    "Lynx"
                );
            },
            1,
            "Jaguar"
        );
    },
    1,
    "Panther"
);
