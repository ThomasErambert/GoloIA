package org.ldv.goloia.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class GoloPagesController {

    @GetMapping("/")
    fun accueil(): String {
        return "utilisateur/acceuil"
    }

    @GetMapping("/connexion")
    fun connexion(): String {
        return "auth/connexion"
    }


}