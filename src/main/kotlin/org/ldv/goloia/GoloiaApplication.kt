package org.ldv.goloia

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class GoloiaApplication

fun main(args: Array<String>) {
    runApplication<GoloiaApplication>(*args)
}
