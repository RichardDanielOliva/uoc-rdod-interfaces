const _FOOTER = {
    "content": {
      "company": {
        "title": "RDOD Tickets",
        "description":
          "Mejorando la forma en la que accedes a la cultura."
      },
      "menu": [
        {
          "id": "explore-events",
          "name": "Explora nuestros eventos",
          "options": [
              { "name": "Conciertos", "url": "/" },
              { "name": "Deportes", "url": "/" },
              { "name": "Teatro y comedia", "url": "/" }
            ]
        },
        {
          "id": "contact",
          "name": "Contactanos",
          "options": [
            { "name": "Soporte", "url": "/" },
            { "name": "Prensa", "url": "/" },
            { "name": "Crea tu evento", "url": "/" }
          ]
        },
        {
          "id": "legal",
          "name": "Legal",
          "options": [
            { "name": "FAQ", "url": "/" },
            { "name": "Terminos de uso", "url": "/" },
            { "name": "Privacidad", "url": "/" }
          ]
        },
        {
          "id": "get-support",
          "name": "Nuestra empresa",
          "options": [
            { "name": "Zona empresa", "url": "/" },
            { "name": "Estamos contratando!", "url": "/" }
          ]
        },
      ],
      "copyright": "© 2022 by Richard Oliva - RDOD. Diseño de interfaces.",
      "contact": {
        "email": {
          "text": "danielolivadenis@uoc.edu",
          "email": "danielolivadenis@uoc.edu"
        },
        "socialMedia": [
          {
            "id": "Linkedin",
            "name": "Follow us on LinkedIn",
            "url": "/"
          }
        ]
      }
    }
  }


export const useLocaleFooter = (props, functions) => {
    return _FOOTER.content;
}
