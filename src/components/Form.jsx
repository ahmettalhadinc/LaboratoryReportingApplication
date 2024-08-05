import React, { useState } from 'react';
import { Fieldset, TextInput, Textarea, FileInput, Button } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../redux/mySlice';
import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification, rem } from '@mantine/core';
function Form() {
  const dispatch = useDispatch();

  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />
  const [close, setClose] = useState(false)
  const [formData, setFormData] = useState({
    dosyaNumarasi: '',
    hastaAdi: '',
    hastaSoyadi: '',
    hastaTcNo: '',
    koyulanTani: '',
    taniDetaylari: '',
    raporTarihi: '',
    raporFotograf: null,
    laborantAdi: '',
    laborantSoyAdi: '',
    hastaneKimlik: '',

  });
  //Bu kisimda yardim alindi 
  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    const newValue = type === 'file' ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = () => {

    dispatch(addData(formData));
    setClose(true)
    setFormData({
      dosyaNumarasi: '',
      hastaAdi: '',
      hastaSoyadi: '',
      hastaTcNo: '',
      koyulanTani: '',
      taniDetaylari: '',
      raporTarihi: '',
      raporFotograf: null,
      laborantAdi: '',
      laborantSoyAdi: '',
      hastaneKimlik: '',
  
    })
    setTimeout(() => {
      setClose(false);
    }, 900);

  };
  return (
    <>
      <h1 style={{ marginTop: 10, textAlign: 'center' }}>Rapor Kaydetme</h1>
      
      <Fieldset legend="Rapor Bilgisi">
        <TextInput
          label="Dosya Numarasi"
          placeholder="Dosya Numarasi"
          name="dosyaNumarasi"
          value={formData.dosyaNumarasi}
          onChange={handleInputChange}
        />
        <TextInput
          label="Hasta Adi"
          placeholder="Hasta Adi"
          
          name="hastaAdi"
          value={formData.hastaAdi}
          onChange={handleInputChange}
          mt="md"
        />
        <TextInput
          label="Hasta Soyadi"
          placeholder="Hasta Soyadi"
          name="hastaSoyadi"
          value={formData.hastaSoyadi}
          onChange={handleInputChange}
          mt="md"
        />
        <TextInput
          label="Hasta T.C NO"
          placeholder="Hasta T.C NO"
          name="hastaTcNo"
          type="number"
          value={formData.hastaTcNo}
          onChange={handleInputChange}
          mt="md"
        />
        <TextInput
          label="Koyulan Tani"
          placeholder="Koyulan Tani"
          name="koyulanTani"
          value={formData.koyulanTani}
          onChange={handleInputChange}
          mt="md"
        />
        <Textarea
          label="Koyulan Tani Detaylari"
          placeholder="Koyulan Tani Detaylari"
          name="taniDetaylari"
          value={formData.taniDetaylari}
          onChange={handleInputChange}
          mt="md"
        />
        <TextInput
          label="Raporun Verildigi Tarih"
          placeholder="Raporun Verildigi Tarih"
          name="raporTarihi"
          type="date"
          value={formData.raporTarihi}
          onChange={handleInputChange}
          mt="md"
        />
        <FileInput
          label="Fiziksel Rapora Ait Fotograf"
          accept="image/png,image/jpeg"
          placeholder="Resim Yuklemek icin tiklayiniz"
          name="raporFotograf"
          onChange={handleInputChange}
        />
        <TextInput
          label="Laborant Adi"
          placeholder="Laborant Adi"
          name="laborantAdi"
          value={formData.laborantAdi}
          onChange={handleInputChange}
          mt="md"
        /><TextInput
          label="Laborant Soyadi"
          placeholder="Laborant Soyadi"
          name="laborantSoyAdi"
          value={formData.laborantSoyAdi}
          onChange={handleInputChange}
          mt="md"
        /><TextInput
          label="Hastane Kimlik Numarasi"
          placeholder="7 Haneli Hastane Kimlik Numarasi"
          name="hastaneKimlik"
          value={formData.hastaneKimlik}
          type="number"
          onChange={handleInputChange}
          maxLength={7}
          mt="md"
        />
      </Fieldset>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          style={{ float: 'right', marginTop: 20, marginBottom:50}}
          variant="filled"
          color="yellow"
          onClick={handleSubmit}
        >
          Gonder
      
        </Button>
      {
        close ? <Notification icon={checkIcon}  color="teal" title="Rapor Kaydedildi!" mt="md">
          Raporlar Sayfasina Goz Atin
        </Notification> :  null

      }
        
      </div>

    </>
  );
}
export default Form;