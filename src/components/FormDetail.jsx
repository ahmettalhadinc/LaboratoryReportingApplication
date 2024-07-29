import React, { useState, useEffect } from 'react';
import { Table } from '@mantine/core';
import { FaRegEdit } from "react-icons/fa";
import { Button } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { updateReport } from '../redux/mySlice';

function FormDetail({ eleman }) {
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState(eleman);
  const dispatch = useDispatch();

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    dispatch(updateReport(formData)); 
    setEdit(false);
  };

  return (
    <div>
      
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Dosya Numarasi</Table.Th>
            <Table.Th>Hasta Adi-Soyadi</Table.Th>
            <Table.Th>Hasta Kimlik Numarasi</Table.Th>
            <Table.Th>Koyulan Tani Basligi</Table.Th>
            <Table.Th>Tani Detaylari</Table.Th>
            <Table.Th>Rapor Fotograf</Table.Th>
            <Table.Th>Rapor Tarihi</Table.Th>
            <Table.Th>Laborant Adi Soyadi</Table.Th>
            <Table.Th>Hastane Kimlik Numarasi</Table.Th>
            <Table.Th>Rapor Islemi</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>{edit ? <input name="dosyaNumarasi" value={formData.dosyaNumarasi} onChange={handleInputChange} /> : formData.dosyaNumarasi}</Table.Td>
            <Table.Td>
              {edit ? (
                <>
                  <input name="hastaAdi" value={formData.hastaAdi} onChange={handleInputChange} />
                  <input name="hastaSoyadi" value={formData.hastaSoyadi} onChange={handleInputChange} />
                </>
              ) : (
                `${formData.hastaAdi} ${formData.hastaSoyadi}`
              )}
            </Table.Td>
            <Table.Td>{edit ? <input name="hastaTcNo" value={formData.hastaTcNo} onChange={handleInputChange} /> : formData.hastaTcNo}</Table.Td>
            <Table.Td>{edit ? <input name="koyulanTani" value={formData.koyulanTani} onChange={handleInputChange} /> : formData.koyulanTani}</Table.Td>
            <Table.Td>{edit ? <input name="taniDetaylari" value={formData.taniDetaylari} onChange={handleInputChange} /> : formData.taniDetaylari}</Table.Td>
            <Table.Td>{edit ? <input name="raporFotograf" value={formData.raporFotograf} onChange={handleInputChange} /> : formData.raporFotograf}</Table.Td>
            <Table.Td>{edit ? <input name="raporTarihi" value={formData.raporTarihi} onChange={handleInputChange} /> : formData.raporTarihi}</Table.Td>
            <Table.Td>
              {edit ? (
                <>
                  <input name="laborantAdi" value={formData.laborantAdi} onChange={handleInputChange} />
                  <input name="laborantSoyAdi" value={formData.laborantSoyAdi} onChange={handleInputChange} />
                </>
              ) : (
                `${formData.laborantAdi} ${formData.laborantSoyAdi}`
              )}
            </Table.Td>
            <Table.Td>{edit ? <input name="hastaneKimlik" value={formData.hastaneKimlik} onChange={handleInputChange} /> : formData.hastaneKimlik}</Table.Td>
            <Table.Td>
              {edit ? (
                <Button onClick={handleSave} variant="filled">Kaydet</Button>
              ) : (
                <FaRegEdit cursor='pointer' onClick={() => setEdit(true)} />
              )}
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default FormDetail;
