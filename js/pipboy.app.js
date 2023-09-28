$(document).ready(function(){
  
    var weapons=[{"name":"44_pistol",
                "damage":48,
                "fire_rate":6,
                "accuracy":66,
                "range":119,
                "weight":4.2,
                "value":99
            },
            {"name":"10mm_pistol",
                "damage":18,
                "fire_rate":46,
                "accuracy":61,
                "range":119,
                "weight":4.2,
                "value":50
            },
            {"name":"assault_rifle",
                "damage":30,
                "fire_rate":40,
                "accuracy":72,
                "range":119,
                "weight":13.1,
                "value":144
            }
        ];

        $('.item-list a').on('click',function(e){
            $('.item-list a').removeClass('active');
            $(e.currentTarget).addClass('active');
        });

$('.item-list a').on('mouseenter',function(e){
    var current_item=$(e.currentTarget).attr('class');
    console.log(current_item);

    for(item in weapons){
        if(weapons[item].name==current_item){
            console.log(weapons[item])
            
            var container=$('.item-stats');
            container.find('damage').html(weapons[item].damage);
            container.find('.fire_rate').html(weapons[item].fire_rate);
            container.find('.accuracey').html(weapons[item].accuracy);
            container.find('.range').html(weapons[item].range);
            container.find('weight').html(weapons[item].weight);
            container.find('value').html(weapons[item].value);
        }
    }
});

});