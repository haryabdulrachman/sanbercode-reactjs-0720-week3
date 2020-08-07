import React, { useState } from "react"
import './tugas14.css'

const BuahBuahan = () => {
  const [dataHargaBuah, setDataHargaBuah] = useState([
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 }
  ])
  const [inputNama, setInputNama] = useState('')
  const [inputHarga, setInputHarga] = useState('')
  const [inputBerat, setInputBerat] = useState('')
  const [indexOfForm, setIndexOfForm] = useState(-1)


  // Input
  const handleChangeNama = (event) => {
    setInputNama(event.target.value)
  }
  const handleChangeHarga = (event) => {
    setInputHarga(event.target.value)
  }
  const handleChangeBerat = (event) => {
    setInputBerat(event.target.value)
  }

  // Edit
  const handleEdit = (event) => {
    let index = event.target.value;
    let nama = dataHargaBuah[index].nama;
    let harga = dataHargaBuah[index].harga;
    let berat = dataHargaBuah[index].berat;
    setInputNama(nama)
    setInputHarga(harga)
    setInputBerat(berat)
    setIndexOfForm(index)
  }

  // Delete
  const handleDelete = (event) => {
    let index = event.target.value;
    let buah = dataHargaBuah;
    buah.splice(index, 1)
    setDataHargaBuah(buah)
  }

  // Submit
  const handleSubmit = (event) => {
    event.preventDefault()
    let newDaftarBuah = dataHargaBuah;
    let nama = inputNama;
    let harga = inputHarga;
    let berat = inputBerat;

    if (indexOfForm === -1) {
      newDaftarBuah = [...newDaftarBuah, { nama, harga, berat }]
    } else {
      newDaftarBuah[indexOfForm].nama = inputNama
      newDaftarBuah[indexOfForm].harga = inputHarga
      newDaftarBuah[indexOfForm].berat = inputBerat
    }

    setDataHargaBuah(newDaftarBuah)
    setInputNama('')
    setInputHarga('')
    setInputBerat('')
    setIndexOfForm(-1)
  }

  return (
    <>
      <div className="container">
        <h1>Tabel Daftar Buah</h1>
        <table>
          <thead>
            <tr>
              <td>Nama</td>
              <td>Harga</td>
              <td>Berat</td>
              <td>Aksi</td>
            </tr>
          </thead>
          <tbody>
            {dataHargaBuah.map((el, index) => {
              return (
                <tr key={index}>
                  <td> {el.nama} </td>
                  <td> {el.harga}</td>
                  <td> {el.berat / 1000} kg</td>
                  <td>
                    <button style={{ marginRight: '5px' }} onClick={handleEdit} value={index} >Edit</button>
                    <button onClick={handleDelete} value={index}>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <h2>Form Buah-Buahan</h2>
      <form onSubmit={handleSubmit}>
        <label>Nama Buah</label>
        <input type="text" required value={inputNama} onChange={handleChangeNama} />
        <label>Harga Buah</label>
        <input type="number" required value={inputHarga} onChange={handleChangeHarga} />
        <label>Berat Buah [dalam gram]</label>
        <input type="number" required value={inputBerat} onChange={handleChangeBerat} /> <br />
        <button>Submit</button>
      </form>
    </>
  )
}


export default BuahBuahan

