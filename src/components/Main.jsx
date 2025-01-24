

function Main() {
  return (
    <main className="main">
        <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
        <a className="button--link" href="./">Ver proyectos</a>
        </section>

        <section className="preview">
        <div className="projectImage"></div>
        <article className="card">
            <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

            <div className="card__author">
            <div className="card__authorPhoto"></div>
            <p className="card__job">
                {job || 'Full stack Developer'}
            </p>
            <h3 className="card__name">{autor || 'Emmelie Bjôrklund'}</h3> {/* añadiendo '||' cuando el valor está vacío se pinta la string si no se pinta la variable */}
            </div>
        
            <div className="card__project">            
            <h3 className="card__name">{name || 'Elegant Workspace'}</h3>
            <p className="card__slogan">{slogan || 'Diseños Exclusivos'}</p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">{desc || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione'}</p>

            <div className="card__technicalInfo">
                <p className="card__technologies">{technologies || 'React JS - HTML - CSS'}</p>
            
                <a className="icon icon__www" href={demo || '#'} title="Haz click para ver el proyecto online">
                Web link
                </a>
                <a className="icon icon__github" href={repo || '#'} title="Haz click para ver el código del proyecto">
                GitHub link
                </a>
            </div>
            </div>
        </article>
        </section>
        <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
            <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
            <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={ handleChangeInput}/>
            <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={ handleChangeInput}/>
            <div className="addForm__2col">
            <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleChangeInput}/>
            <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleChangeInput}/>
            </div>         
            <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleChangeInput}/>
            <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleChangeInput}></textarea>
        </fieldset>

        <fieldset className="addForm__group">
            <legend className="addForm__title">Cuéntanos sobre la autora</legend>
            <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleChangeInput}/>
            <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onChange={handleChangeInput}/>
        </fieldset>

        <fieldset className="addForm__group--upload">
            <label htmlFor="image" className="button">Subir foto del proyecto</label>
            <input className="addForm__hidden" type="file" name="image" id="image" onChange={handleChangeInput}/>
            <label htmlFor="photo" className="button">Subir foto de la autora</label>
            <input className="addForm__hidden" type="file" name="photo" id="photo"/>
            <button className="button--large">Guardar proyecto</button>
        </fieldset>
        
        </form>
  </main>
  )
}

export default Main