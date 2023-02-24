import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../styles/content.scss"

export const Content = ({ data, search }) => {
  const { word, phonetic, meanings, sourceUrls } = data[0]
  let audio = new Audio(data[0].phonetics[0].audio)
  return (
    <div className='content'>
      <section className='heading'>
        <div className=''>
          <h1 className='word'>{word}</h1>
          <p className='phonetic'>{phonetic}</p>
        </div>
        <button onClick={() => audio.play()} className='play-audio'>
          <FontAwesomeIcon icon={faPlay} />
        </button>
      </section>
      {meanings.map((meaning => (
        <section key={meaning.partOfSpeech} className='meanings'>
          <h2 className='head'>
            {meaning.partOfSpeech}
          </h2>
          <h3 className='meaning-label'>Meaning</h3>

          <ul>
            {meaning.definitions.map(definition => (
              <li key={definition.definition}>
                {definition.definition}
                <div className='example'>{definition.example}</div>

              </li>
            ))}
          </ul>
          <div className='synonyms'>
            <span className='title'>Synonyms</span>
            {meaning.synonyms.map((synonym, i) => (
              <button key={synonym + i} onClick={() => search(synonym)} className='link' href="">{synonym}</button>
            ))}
          </div>
          <div className='antonyms'>
            <span className='title'>Antonyms</span>
            {meaning.antonyms.map((antonym, i) => (
              <button key={antonym + i} onClick={() => search(antonym)} className='link' href="">{antonym}</button>
            ))}
          </div>
        </section>
      )))}
      <section className='meanings'>
        <div className='head'>წყარო</div>
        {sourceUrls.map((sourceUrl, i) => (
          <a key={sourceUrl + i} className='src-url' href={sourceUrl}>{sourceUrl}</a>
        ))}
      </section>

    </div>
  )
}
