import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'
import { useState, useEffect } from "react";

export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);

    //Esse metodo fetch aqui está fazendo uma requisição Get com o endpoint do 
    //github, se não especificar o fetch faz um Get.
    //https://www.freecodecamp.org/portuguese/news/como-fazer-o-fetch-dos-dados-em-react/
    useEffect(() => {
         fetch('https://api.github.com/users/joaopa12/repos')
         .then(response => response.json())
         .then(data => setRepositories(data))
    },[repositories])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
               {repositories.map(repository => {
                   return <RepositoryItem key={repository.name} repository={repository}/>
               })}
               
            </ul>
        </section>
    )
}