$(document).ready(() => {

    // Paginas 

    $('#quem-somos').on('click', () => {
        $('#quem-somos').addClass('link-ativo');
        $.get('./capas/capa-quem-somos.html', data => {
            $('#capa').html(data)
        })
        $.get('./corpos/quem-somos.html', data => {
            $('#corpo').html(data)
        })
    })

    $('#servicos').on('click', () => {
        $('#servicos').addClass('link-ativo');
        $.get('capas/capa-servicos.html', data => {
            $('#capa').html(data)
        })
        $.get('corpos/servicos.html', data => {
            $('#corpo').html(data)
        })
    })

    $('#portfolio').on('click', () => {
        $('#portfolio').addClass('link-ativo');
        $.get('capas/capa-portfolio.html', data => {
            $('#capa').html(data)
        })
        $.get('corpos/portfolio.html', data => {
            $('#corpo').html(data)
        })
    })

    $('#clientes').on('click', () => {
        $('#clientes').addClass('link-ativo');
        $.get('capas/capa-clientes.html', data => {
            $('#capa').html(data)
        })
        $.get('corpos/clientes.html', data => {
            $('#corpo').html(data)
        })
    })

    $('#contato').on('click', () => {
        $('#contato').addClass('link-ativo');
        $.get('capas/capa-contato.html', data => {
            $('#capa').html(data)
        })
        $.get('corpos/contato.html', data => {
            $('#corpo').html(data)
        })
    })


    //LINKS E BOTOES DA HOME

    $('.link-serv').on('click', () => {
        $.get('capas/capa-servicos.html', data => {
            $('#capa').html(data)
        })
        $.get('corpos/servicos.html', data => {
            $('#corpo').html(data)
        })
    })

    $('#btn-portfolio').on('click', () => {
        $.get('capas/capa-portfolio.html', data => {
            $('#capa').html(data)
        })
        $.get('corpos/portfolio.html', data => {
            $('#corpo').html(data)
        })
    })

    $('#btn-comece-ja').on('click', () => {
        $.get('capas/capa-contato.html', data => {
            $('#capa').html(data)
        })
        $.get('corpos/contato.html', data => {
            $('#corpo').html(data)
        })
    })

    $('.botao-mais').on('click', () => {
        window.location.href = '#secao-servicos';
    })

    $('#btn-serv').on('click', () => {
        $.get('capas/capa-servicos.html', data => {
            $('#capa').html(data)
        })
        $.get('corpos/servicos.html', data => {
            $('#corpo').html(data)
        })
    })

    // Clientes

    $('#engenharia').on('click', () => {
        $('.botao-cliente').removeClass('btn-ativo');
        $('#engenharia').addClass('btn-ativo');
        $.get('./galerias/galeria-engenharia.html', data => {
            $('#galeria').html(data)
        })
    })
    
    $('#saude').on('click', () => {
        $('.botao-cliente').removeClass('btn-ativo');
        $('#saude').addClass('btn-ativo');
        $.get('sinergia/galerias/galeria-saude.html', data => {
            $('#galeria').html(data)
        })
    })

    $('#comercial').on('click', () => {
        $('.botao-cliente').removeClass('btn-ativo');
        $('#comercial').addClass('btn-ativo');
        $.get('../galerias/galeria-comercial.html', data => {
            $('#galeria').html(data)
        })
    })

    $('#industrial').on('click', () => {
        $('.botao-cliente').removeClass('btn-ativo');
        $('#industrial').addClass('btn-ativo');
        $.get('galerias/galeria-industrial.html', data => {
            $('#galeria').html(data)
        })
    })

    $('#agropecuaria').on('click', () => {
        $('.botao-cliente').removeClass('btn-ativo');
        $('#agropecuaria').addClass('btn-ativo');
        $.get('galerias/galeria-agropecuaria.html', data => {
            $('#galeria').html(data)
        })
    })

    $('#educacao').on('click', () => {
        $('.botao-cliente').removeClass('btn-ativo');
        $('#educacao').addClass('btn-ativo');
        $.get('galerias/galeria-educacao.html', data => {
            $('#galeria').html(data)
        })
    })

    // Links serviços rodapé

    $('.rp-serv').on('click', () => {
        $.get('capas/capa-servicos.html', data => {
            $('#capa').html(data)
        })
        $.get('corpos/servicos.html', data => {
            $('#corpo').html(data)
        })

        window.scrollTo(0,0);
    })

    if (window.innerWidth < 1000) {
        document.getElementById('contato-sup').innerHTML = '';
    }

    window.addEventListener('resize', () => {
        var largura = window.innerWidth;

        if (largura < 1000) {
            document.getElementById('contato-sup').innerHTML = '';

        } else {
            document.getElementById('contato-sup').innerHTML = `

            <div class="mb-3 me-4 info">
            <i class="fa-solid fa-phone pe-2"></i>(75) 99880-2624
            </div>
            <div class="mb-3 me-4 info">
                <i class="fa-regular fa-envelope pe-2"></i>Email: contato@sinergiasee.com.br
            </div>
            <div class="info">
                <i class="fa-regular fa-clock pe-2"></i>Funcionamento: 8:00h - 18:00h
            </div>
            `
        }
    })

    $('.slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        variableWidth: true,
        arrows: false
    });
})