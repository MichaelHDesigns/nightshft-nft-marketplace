import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector  } from 'react-redux'

// types
import { IItem } from 'types'

// styles
import {
    Md,
    Title,
    BtnClose,
    Container,
    ItemsList
 } from './styles'

// config
import { exploreRoute } from 'config'

// hooks
import { useInteractionHandler } from './hooks'


export default function index({
    showResults,
    dplShowResults
}: {
    showResults: boolean,
    dplShowResults: React.Dispatch<React.SetStateAction<boolean>>
}) {
    // @ts-ignore
    const { items } = useSelector(state => state.searchResults)
    const wrapperRef = useRef()

  // handles click outside navigation menu
  useEffect(() => {
    if (wrapperRef){
        document.addEventListener('mousedown', (e) => useInteractionHandler(e, wrapperRef, dplShowResults))
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener('mousedown', (e) => useInteractionHandler(e, wrapperRef.current, dplShowResults))
        }
    }
  }, [])

    return (
        <Md ref={wrapperRef}>
            <Container>
                <BtnClose
                onClick={() => dplShowResults(!showResults)}>
                    <svg width="20px" height="20px" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.3333 8.81375L23.4533 6.875L16 14.5613L8.54663 6.875L6.66663 8.81375L14.12 16.5L6.66663 24.1863L8.54663 26.125L16 18.4387L23.4533 26.125L25.3333 24.1863L17.88 16.5L25.3333 8.81375Z" fill="#f1f1f1"/>
                    </svg>
                </BtnClose>
                <Title>
                    Single collectibles
                </Title>
                <ItemsList>
                    { items && items.length ? items.slice(0,3).map((i: IItem) => (
                        <li>
                            <Image
                             className="skeleton"
                             width="40px"
                             height="60px"
                             objectFit="cover"
                             src={i.image}
                             alt={i.name} />
                            <div>
                                <span>{i.name}</span>
                                <span>{i.description}</span>
                            </div>
                        </li>
                    )) : (
                        <span style={{
                            color: "#8A8A8A",
                            fontSize: '.8rem',
                            fontWeight: 500
                        }}>No results found.</span>
                    ) }
                </ItemsList>
                <Link href={exploreRoute}>
                    <a>
                        <button style={{
                            outline: "none",
                            background: "transparent",
                            color: "#F1F1F1",
                            fontSize: ".8rem",
                            padding: ".6em",
                            textAlign: "center",
                            fontWeight: 700,
                            cursor: "pointer",
                            borderRadius: "50px",
                            width: "100%",
                            border: "1px solid #8A8A8A"
                        }}>
                            Show all results
                        </button>
                    </a>
                </Link>
            </Container>
        </Md>
    )
}
