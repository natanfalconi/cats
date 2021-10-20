import { useState } from "react";
import { Footer } from "../Footer";
import { Form } from "../Form";

import Modal from 'react-modal'

import './styled.css'

export function Adopt() {

    const [modalIsOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <section className="section-adopt">
                <div className="section-adopt-about">
                    <h2>Por que adotar?</h2>
                    <p>Adotar um pet é um ato de amor aos animais. Afinal, com a adoção de gatos, você dá um lar para ele, além de oferecer espaço a outro peludo em ONGs.</p>
                </div>

                <div className="content-adopt">
                    <div>
                        <h3>Nesse exato momento</h3>
                        <p>existem milhares de doguinhos e gatinhos esperando um humano para chamar de seu.</p>
                    </div>
                    <div>
                        <h3>E não há recompensa maior</h3>
                        <p>do que vê-los se tornando aquela coisinha alegre e saudável depois de uma boa dose de cuidado e carinho.</p>
                    </div>
                    <div>
                        <h3>Pensando bem, a pergunta é outra:</h3>
                        <p>se você pode mudar o destino de um animal de rua, por que não faria isso?</p>
                    </div>
                </div>

                <button onClick={() => setIsOpen(true)} className="btn-amigo" >Encontrar meu novo amigo</button>
            </section>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <button
                    type="button"
                    onClick={closeModal}
                    className="react-modal-close"
                >
                    X
                </button>

                <div className="pet">
                    <div className="pet-text">
                        <h2>Onde adotar um pet?</h2>
                        <p>A fim de levar você a adotar um pet, separamos alguns links, de sites especializados nesse assunto  </p>
                    </div>

                    <div className="pet-boby">
                        <div>
                            <img src="https://media.istockphoto.com/photos/curious-kitten-looking-at-the-camera-picture-id1270023880?b=1&k=20&m=1270023880&s=170667a&w=0&h=7tAE4L2d7qJ4k1OMydwof1kObkG6TuNkDj2n2QC88ic=" alt="" />
                            <p>Conheça 12 sites para adotar um pet</p>
                            <a href="https://www.doglife.com.br/blog/adotar-cachorro-online-conheca-5-sites-para-adotar-um-pet-5fe467d9dbedb32b13cc5a4a/" target="_blank">Adote um amigo</a>
                        </div>
                        <div>
                            <img src="https://media.istockphoto.com/photos/baby-kitten-loving-on-a-dog-picture-id1284834234?b=1&k=20&m=1284834234&s=170667a&w=0&h=cD-1E6pI5PIuM5hRDDj5T16m75cWcDYnz3KlQhK7mJQ=" alt="" srcset="" />

                            <p>8 motivos para adotar um pet</p>
                            <a href="https://foxvet.com.br/8-motivos-para-adotar-um-pet/" target="_blank">Adote um amigo</a>
                        </div>
                        <div>
                            <img src="https://media.istockphoto.com/photos/tabby-cat-and-border-collie-dog-picture-id1306543850?b=1&k=20&m=1306543850&s=170667a&w=0&h=fQ1G45yt6Gx4CGegVBKzsv-HQOuPDvaq7qHPSb-yJQE=" alt="" srcset="" />

                            <p>Quero adotar</p>
                            <a href="https://www.adotepetz.com.br/" target="_blank">Adote um amigo</a>
                        </div>
                    </div>
                </div>
            </Modal>

            <Form />

            <Footer />
        </>
    )
}