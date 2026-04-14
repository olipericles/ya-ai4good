import { useState, useEffect } from 'react';

export interface UF {
  id: number;
  sigla: string;
  nome: string;
}

export interface Cidade {
  id: number;
  nome: string;
}

export function useIBGE(selectedUf: string) {
  const [ufs, setUfs] = useState<UF[]>([]);
  const [cidades, setCidades] = useState<Cidade[]>([]);
  const [loading, setLoading] = useState(false);

  // Carrega os estados (UF) uma vez
  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
      .then(res => res.json())
      .then(data => setUfs(data))
      .catch(err => console.error("Erro IBGE UF:", err));
  }, []);

  // Carrega as cidades sempre que a UF selecionada muda
  useEffect(() => {
    if (!selectedUf || selectedUf === 'BR' || selectedUf === 'Nacional') {
      setCidades([]);
      return;
    }
    setLoading(true);
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios?orderBy=nome`)
      .then(res => res.json())
      .then(data => {
        setCidades(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro IBGE Cidades:", err);
        setLoading(false);
      });
  }, [selectedUf]);

  return { ufs, cidades, loading };
}
