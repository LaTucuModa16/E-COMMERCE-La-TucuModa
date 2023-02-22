import React, { useEffect, useState } from "react";
import { Container, FormGroup, Input } from "reactstrap";

export default function UploadImage({ setImg }) {

    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "TucuModa");
        setLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dwktzrprh/image/upload",
            {
                method: "POST",
                body: data,

            }
        )
        const img = await res.json();
        /*  console.log(res) */
        setImage(img.secure_url)
        console.log(img.secure_url)
        setImg(img.secure_url)
        setLoading(false)
    }

    return (
        <div>
            <Container style={{ textAlign: "center" }}>
                <h1>
                    Subiendo Imagenes
                </h1>
                <FormGroup>
                    <Input
                        type="file"
                        name="img"
                        placeholder="Sube tu image!"
                        onChange={uploadImage}
                    />
                    {loading ? (<h3>Cargando Imagen...</h3>) : (<img src={image} style={{ width: "300px" }} />)}
                </FormGroup>
            </Container>
        </div>
    )
}