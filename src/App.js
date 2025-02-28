import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState({});

  const onChangeQuestions = (e) => {
    e.preventDefault();
    const nData = data;
    nData[e.target.name] = e.target.value;

    setData(nData);
    console.log(nData);
  };

  const onSubmit = () => {
    console.log(data);
  };

  return (
    <>
      <Container>
        <Card className="bg-dark text-white mt-2">
          <Card.Body>
            <Card.Header className="text-info mx-auto">
              <h2>Ciencia y tecnología</h2>
            </Card.Header>

            <Form>
              <Form.Group className="mb-2">
                <Form.Label>
                  1. ¿Cómo crees que la inteligencia artificial cambiará el
                  mercado laboral en los próximos 10 años?
                </Form.Label>
                <Form.Control name="question1-1" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  2. ¿Qué impacto tiene la tecnología en las relaciones
                  interpersonales?
                </Form.Label>
                <Form.Control name="question1-2" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  3. Explica cómo las redes sociales han transformado el
                  periodismo.
                </Form.Label>
                <Form.Control name="question1-3" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  4. ¿De qué manera los dispositivos móviles han cambiado la
                  manera en que consumimos información?
                </Form.Label>
                <Form.Control name="question1-4" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  5. ¿Cómo influye la digitalización en el sector educativo?
                </Form.Label>
                <Form.Control name="question1-5" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  6. ¿Cuál es el rol de la ética en el desarrollo tecnológico?
                </Form.Label>
                <Form.Control name="question1-6" onChange={onChangeQuestions} />
              </Form.Group>

              <Button
                className=" d-flex mx-auto mt-3"
                variant="light"
                type="submit"
                onClick={()=> onSubmit()}
              >
                Enviar
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white mt-2">
          <Card.Body>
            <Card.Header className="text-success mx-auto">
              <h2>Ciencia y Medio Ambiente</h2>
            </Card.Header>

            <Form>
              <Form.Group className="mb-2">
                <Form.Label>
                  1. ¿Cómo crees que la ciencia puede contribuir a la
                  conservación de especies en peligro de extinción?
                </Form.Label>
                <Form.Control name="question2-1" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  2. Explica el papel de la energía renovable en la lucha contra
                  el cambio climático.
                </Form.Label>
                <Form.Control name="question2-2" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  3. ¿De qué manera la agricultura sostenible puede mitigar el
                  impacto ambiental?
                </Form.Label>
                <Form.Control name="question2-3" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  4. ¿Qué desafíos enfrenta la humanidad para lograr una
                  economía circular?
                </Form.Label>
                <Form.Control name="question2-4" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  5. ¿Qué papel tiene la biotecnología en la sostenibilidad
                  ambiental?
                </Form.Label>
                <Form.Control name="question2-5" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  6. ¿Cómo afecta la contaminación plástica a los ecosistemas
                  marinos?
                </Form.Label>
                <Form.Control name="question2-6" onChange={onChangeQuestions} />
              </Form.Group>

              <Button
                className=" d-flex mx-auto mt-3"
                variant="light"
                type="submit"
                onClick={()=> onSubmit()}
              >
                Enviar
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white mt-2">
          <Card.Body>
            <Card.Header className="text-warning mx-auto">
              <h2>Historia y Política</h2>
            </Card.Header>

            <Form>
              <Form.Group className="mb-2">
                <Form.Label>
                  1. ¿Cuáles fueron las principales causas de la Primera Guerra
                  Mundial?
                </Form.Label>
                <Form.Control name="question3-1" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  2. Explica el impacto de la Revolución Industrial en la
                  configuración de las sociedades modernas.
                </Form.Label>
                <Form.Control name="question3-2" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  3. ¿Cómo influyó la Guerra Fría en el desarrollo de la
                  tecnología espacial?
                </Form.Label>
                <Form.Control name="question3-3" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  4. ¿Qué importancia tuvo el movimiento sufragista en la
                  historia de los derechos humanos?
                </Form.Label>
                <Form.Control name="question3-4" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  5. ¿De qué manera los movimientos independentistas influyeron
                  en la configuración de América Latina?
                </Form.Label>
                <Form.Control name="question3-5" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  6. ¿Qué efectos tuvo la caída del Muro de Berlín en la
                  política internacional?
                </Form.Label>
                <Form.Control name="question3-6" onChange={onChangeQuestions} />
              </Form.Group>

              <Button
                className=" d-flex mx-auto mt-3"
                variant="light"
                type="submit"
                onClick={()=> onSubmit()}
              >
                Enviar
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white mt-2">
          <Card.Body>
            <Card.Header className="text-danger mx-auto">
              <h2>Economía y Finanzas</h2>
            </Card.Header>

            <Form>
              <Form.Group className="mb-2">
                <Form.Label>
                  1. ¿Cómo afecta la inflación al poder adquisitivo de los
                  ciudadanos?
                </Form.Label>
                <Form.Control name="question4-1" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  2. ¿Qué rol desempeñan los bancos centrales en la economía de
                  un país?
                </Form.Label>
                <Form.Control name="question4-2" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  3. ¿Cómo influyen las tasas de interés en las decisiones de
                  inversión de las empresas?
                </Form.Label>
                <Form.Control name="question4-3" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  4. ¿Qué impacto tiene el comercio internacional en el
                  crecimiento económico?
                </Form.Label>
                <Form.Control name="question4-4" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  5. ¿De qué manera la automatización está transformando el
                  sector manufacturero?
                </Form.Label>
                <Form.Control name="question4-5" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  6. ¿Cómo afecta el crecimiento del comercio electrónico a las
                  pequeñas empresas?
                </Form.Label>
                <Form.Control name="question4-6" onChange={onChangeQuestions} />
              </Form.Group>

              <Button
                className=" d-flex mx-auto mt-3"
                variant="light"
                type="submit"
                onClick={()=> onSubmit()}
              >
                Enviar
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white mt-2">
          <Card.Body>
            <Card.Header className="text-primary mx-auto">
              <h2>Cultura y Sociedad</h2>
            </Card.Header>

            <Form>
              <Form.Group className="mb-2">
                <Form.Label>
                  1. ¿Cómo influyen las tradiciones culturales en la identidad
                  de un país?
                </Form.Label>
                <Form.Control name="question5-1" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  2. ¿Qué impacto tiene la globalización en la homogeneización
                  cultural?
                </Form.Label>
                <Form.Control name="question5-2" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  3. ¿Cuál es el papel de la música en la construcción de la
                  identidad juvenil?
                </Form.Label>
                <Form.Control name="question5-3" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  4. ¿De qué manera el cine refleja los problemas sociales de
                  una época?
                </Form.Label>
                <Form.Control name="question5-4" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  5. ¿Cómo contribuye la literatura a la difusión de ideas
                  filosóficas y políticas?
                </Form.Label>
                <Form.Control name="question5-5" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  6. ¿Qué impacto tiene el arte urbano en la transformación de
                  los espacios públicos?
                </Form.Label>
                <Form.Control name="question5-6" onChange={onChangeQuestions} />
              </Form.Group>

              <Button
                className=" d-flex mx-auto mt-3"
                variant="light"
                type="submit"
                onClick={()=> onSubmit()}
              >
                Enviar
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white mt-2">
          <Card.Body>
            <Card.Header className="text-info mx-auto">
              <h2>Ciencia y tecnología</h2>
            </Card.Header>

            <Form>
              <Form.Group className="mb-2">
                <Form.Label>
                  1. ¿Qué importancia tiene la ciencia de datos en la toma de
                  decisiones empresariales?
                </Form.Label>
                <Form.Control name="question6-1" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  2. Explica cómo la inteligencia artificial está revolucionando
                  el campo de la medicina.
                </Form.Label>
                <Form.Control name="question6-2" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  3. ¿Qué rol juegan los avances en materiales en la innovación
                  tecnológica?
                </Form.Label>
                <Form.Control name="question6-3" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  4. ¿Cómo influye la computación cuántica en el futuro de la
                  ciberseguridad?
                </Form.Label>
                <Form.Control name="question6-4" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  5. ¿Qué impacto tienen los vehículos autónomos en la industria
                  del transporte?
                </Form.Label>
                <Form.Control name="question6-5" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  6. ¿Cómo afecta el desarrollo de robots en la automatización
                  industrial?
                </Form.Label>
                <Form.Control name="question6-6" onChange={onChangeQuestions} />
              </Form.Group>

              <Button
                className=" d-flex mx-auto mt-3"
                variant="light"
                type="submit"
                onClick={()=> onSubmit()}
              >
                Enviar
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white mt-2">
          <Card.Body>
            <Card.Header className="text-secondary mx-auto">
              <h2>Psicología y Salud Mental</h2>
            </Card.Header>

            <Form>
              <Form.Group className="mb-2">
                <Form.Label>
                  1. ¿Cómo influyen las redes sociales en la autoestima de los
                  adolescentes?
                </Form.Label>
                <Form.Control name="question7-1" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  2. Explica la relación entre el estrés y las enfermedades
                  físicas.
                </Form.Label>
                <Form.Control name="question7-2" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  3. ¿Qué factores psicológicos influyen en la toma de
                  decisiones?
                </Form.Label>
                <Form.Control name="question7-3" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  4. ¿De qué manera la pandemia afectó la salud mental a nivel
                  global?
                </Form.Label>
                <Form.Control name="question7-4" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  5. ¿Cómo se puede mejorar el bienestar emocional en el entorno
                  laboral?
                </Form.Label>
                <Form.Control name="question7-5" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  6. ¿Qué impacto tiene la meditación en el control de la
                  ansiedad?
                </Form.Label>
                <Form.Control name="question7-6" onChange={onChangeQuestions} />
              </Form.Group>

              <Button
                className=" d-flex mx-auto mt-3"
                variant="light"
                type="submit"
                onClick={()=> onSubmit()}
              >
                Enviar
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white mt-2">
          <Card.Body>
            <Card.Header className="text-success mx-auto">
              <h2>Filosofía y Ética</h2>
            </Card.Header>

            <Form>
              <Form.Group className="mb-2">
                <Form.Label>
                  1. ¿Cuál es el significado de la "libertad" en la filosofía de
                  Jean-Paul Sartre?
                </Form.Label>
                <Form.Control name="question8-1" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  2. ¿De qué manera la ética utilitarista influye en la toma de
                  decisiones morales?
                </Form.Label>
                <Form.Control name="question8-2" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  3. Explica el concepto de "justicia" según John Rawls.
                </Form.Label>
                <Form.Control name="question8-3" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  4. ¿Qué impacto tiene el relativismo moral en la sociedad
                  contemporánea?
                </Form.Label>
                <Form.Control name="question8-4" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  5. ¿Cómo ha evolucionado la concepción del "bien común" a lo
                  largo de la historia de la filosofía?
                </Form.Label>
                <Form.Control name="question8-5" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  6. ¿Qué desafíos plantea la ética en el ámbito de la
                  inteligencia artificial?
                </Form.Label>
                <Form.Control name="question8-6" onChange={onChangeQuestions} />
              </Form.Group>

              <Button
                className=" d-flex mx-auto mt-3"
                variant="light"
                type="submit"
                onClick={()=> onSubmit()}
              >
                Enviar
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white mt-2">
          <Card.Body>
            <Card.Header className="text-warning mx-auto">
              <h2>Educación y Aprendizaje</h2>
            </Card.Header>

            <Form>
              <Form.Group className="mb-2">
                <Form.Label>
                  1. ¿Qué papel juega la motivación intrínseca en el
                  aprendizaje?
                </Form.Label>
                <Form.Control name="question9-1" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  2. ¿Cómo pueden las nuevas tecnologías mejorar el proceso de
                  enseñanza-aprendizaje?
                </Form.Label>
                <Form.Control name="question9-2" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  3. ¿De qué manera el aprendizaje colaborativo fomenta el
                  desarrollo de habilidades blandas?
                </Form.Label>
                <Form.Control name="question9-3" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  4. ¿Cómo influyen los estilos de aprendizaje en la adquisición
                  de conocimientos?
                </Form.Label>
                <Form.Control name="question9-4" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  5. ¿Qué importancia tiene el desarrollo del pensamiento
                  crítico en la educación?
                </Form.Label>
                <Form.Control name="question9-5" onChange={onChangeQuestions} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  6. ¿Cómo puede la educación emocional contribuir a la
                  formación integral de los estudiantes?
                </Form.Label>
                <Form.Control name="question9-6" onChange={onChangeQuestions} />
              </Form.Group>

              <Button
                className=" d-flex mx-auto mt-3"
                variant="light"
                type="submit"
                onClick={()=> onSubmit()}
              >
                Enviar
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white mt-2">
          <Card.Body>
            <Card.Header className="text-primary mx-auto">
              <h2>Deportes y Salud</h2>
            </Card.Header>

            <Form>
              <Form.Group className="mb-2">
                <Form.Label>
                  1. ¿Cómo influye la práctica regular de ejercicio en la salud
                  mental?
                </Form.Label>
                <Form.Control
                  name="question10-1"
                  onChange={onChangeQuestions}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  2. ¿Qué factores psicológicos afectan el rendimiento de los
                  atletas de alto rendimiento?
                </Form.Label>
                <Form.Control
                  name="question10-2"
                  onChange={onChangeQuestions}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  3. ¿Cómo ha evolucionado la tecnología en el análisis del
                  rendimiento deportivo?
                </Form.Label>
                <Form.Control
                  name="question10-3"
                  onChange={onChangeQuestions}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  4. ¿De qué manera la nutrición influye en el rendimiento
                  deportivo?
                </Form.Label>
                <Form.Control
                  name="question10-4"
                  onChange={onChangeQuestions}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  5. ¿Cómo afecta el dopaje en la ética del deporte profesional?
                </Form.Label>
                <Form.Control
                  name="question10-5"
                  onChange={onChangeQuestions}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>
                  6. ¿Qué impacto tiene el deporte en la cohesión social y
                  comunitaria?
                </Form.Label>
                <Form.Control
                  name="question10-6"
                  onChange={onChangeQuestions}
                />
              </Form.Group>

              <Button
                className=" d-flex mx-auto mt-3"
                variant="light"
                type="submit"
                onClick={()=> onSubmit()}
              >
                Enviar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default App;
