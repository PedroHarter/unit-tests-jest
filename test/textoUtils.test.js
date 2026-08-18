const TextoUtils = require("../src/textoUtils");

describe("TextoUtils", () => {
  let textoUtils;

  beforeEach(() => {
    textoUtils = new TextoUtils();
  });

  describe("inverter", () => {
    test("deve inverter uma string simples", () => {
      // Arrange
      const texto = "javascript";

      // Act
      const resultado = textoUtils.inverter(texto);

      // Assert
      expect(resultado).toBe("tpircsavaj");
    });

    test("deve retornar string vazia ao inverter string vazia", () => {
      // Arrange
      const texto = "";

      // Act
      const resultado = textoUtils.inverter(texto);

      // Assert
      expect(resultado).toBe("");
    });
  });

  describe("ehPalindromo", () => {
    test("deve retornar true para palindromo simples", () => {
      // Arrange
      const texto = "arara";

      // Act
      const resultado = textoUtils.ehPalindromo(texto);

      // Assert
      expect(resultado).toBe(true);
    });

    test("deve retornar true para palindromo com espacos, pontuacao e caixa mista", () => {
      // Arrange
      const texto = "A base do teto desaba";

      // Act
      const resultado = textoUtils.ehPalindromo(texto);

      // Assert
      expect(resultado).toBe(true);
    });

    test("deve retornar false para string que nao e palindromo", () => {
      // Arrange
      const texto = "javascript";

      // Act
      const resultado = textoUtils.ehPalindromo(texto);

      // Assert
      expect(resultado).toBe(false);
    });
  });

  describe("capitalizar", () => {
    test("deve capitalizar a primeira letra de cada palavra", () => {
      // Arrange
      const texto = "ola mundo";

      // Act
      const resultado = textoUtils.capitalizar(texto);

      // Assert
      expect(resultado).toBe("Ola Mundo");
    });

    test("deve normalizar letras maiusculas no meio da palavra", () => {
      // Arrange
      const texto = "OLA MUNDO";

      // Act
      const resultado = textoUtils.capitalizar(texto);

      // Assert
      expect(resultado).toBe("Ola Mundo");
    });

    test("deve manter palavras vazias quando houver espacos duplos", () => {
      // Arrange
      const texto = "ola  mundo";

      // Act
      const resultado = textoUtils.capitalizar(texto);

      // Assert
      expect(resultado).toBe("Ola  Mundo");
    });
  });

  describe("contarOcorrencias", () => {
    test("deve contar corretamente as ocorrencias de uma substring", () => {
      // Arrange
      const texto = "banana";
      const substring = "an";

      // Act
      const resultado = textoUtils.contarOcorrencias(texto, substring);

      // Assert
      expect(resultado).toBe(2);
    });

    test("deve retornar 0 quando a substring nao existe no texto", () => {
      // Arrange
      const texto = "banana";
      const substring = "xyz";

      // Act
      const resultado = textoUtils.contarOcorrencias(texto, substring);

      // Assert
      expect(resultado).toBe(0);
    });

    test("deve retornar 0 quando a substring for vazia", () => {
      // Arrange
      const texto = "banana";
      const substring = "";

      // Act
      const resultado = textoUtils.contarOcorrencias(texto, substring);

      // Assert
      expect(resultado).toBe(0);
    });
  });

  describe("removerEspacosExtras", () => {
    test("deve remover espacos do inicio, fim e entre palavras", () => {
      // Arrange
      const texto = "   ola    mundo   ";

      // Act
      const resultado = textoUtils.removerEspacosExtras(texto);

      // Assert
      expect(resultado).toBe("ola mundo");
    });
  });

  describe("paraSlug", () => {
    test("deve converter texto com acentos e pontuacao para slug", () => {
      // Arrange
      const texto = "Olá Mundo!";

      // Act
      const resultado = textoUtils.paraSlug(texto);

      // Assert
      expect(resultado).toBe("ola-mundo");
    });

    test("deve converter texto com multiplos espacos para slug com hifen unico", () => {
      // Arrange
      const texto = "  Título   com   espaços  ";

      // Act
      const resultado = textoUtils.paraSlug(texto);

      // Assert
      expect(resultado).toBe("titulo-com-espacos");
    });
  });

  describe("truncar", () => {
    test("deve truncar o texto e adicionar reticencias quando exceder o tamanho", () => {
      // Arrange
      const texto = "javascript";
      const tamanho = 4;

      // Act
      const resultado = textoUtils.truncar(texto, tamanho);

      // Assert
      expect(resultado).toBe("java...");
    });

    test("deve retornar o texto original quando ele for menor ou igual ao tamanho", () => {
      // Arrange
      const texto = "js";
      const tamanho = 10;

      // Act
      const resultado = textoUtils.truncar(texto, tamanho);

      // Assert
      expect(resultado).toBe("js");
    });

    test("deve lancar erro quando o tamanho for negativo", () => {
      // Arrange
      const texto = "javascript";
      const tamanho = -1;

      // Act & Assert
      expect(() => textoUtils.truncar(texto, tamanho)).toThrow(
        "O tamanho não pode ser negativo",
      );
    });
  });

  describe("contarPalavras", () => {
    test("deve contar corretamente o numero de palavras", () => {
      // Arrange
      const texto = "essa e uma frase de teste";

      // Act
      const resultado = textoUtils.contarPalavras(texto);

      // Assert
      expect(resultado).toBe(6);
    });

    test("deve ignorar espacos extras ao contar palavras", () => {
      // Arrange
      const texto = "  uma    frase   ";

      // Act
      const resultado = textoUtils.contarPalavras(texto);

      // Assert
      expect(resultado).toBe(2);
    });

    test("deve retornar 0 para uma string vazia ou somente com espacos", () => {
      // Arrange
      const texto = "   ";

      // Act
      const resultado = textoUtils.contarPalavras(texto);

      // Assert
      expect(resultado).toBe(0);
    });
  });

  describe("somenteLetras", () => {
    test("deve retornar true para string contendo apenas letras", () => {
      // Arrange
      const texto = "javascript";

      // Act
      const resultado = textoUtils.somenteLetras(texto);

      // Assert
      expect(resultado).toBe(true);
    });

    test("deve retornar true para string com letras acentuadas", () => {
      // Arrange
      const texto = "coração";

      // Act
      const resultado = textoUtils.somenteLetras(texto);

      // Assert
      expect(resultado).toBe(true);
    });

    test("deve retornar false para string contendo numeros", () => {
      // Arrange
      const texto = "js123";

      // Act
      const resultado = textoUtils.somenteLetras(texto);

      // Assert
      expect(resultado).toBe(false);
    });

    test("deve retornar false para string contendo espacos", () => {
      // Arrange
      const texto = "ola mundo";

      // Act
      const resultado = textoUtils.somenteLetras(texto);

      // Assert
      expect(resultado).toBe(false);
    });
  });

  describe("substituirTudo", () => {
    test("deve substituir todas as ocorrencias do alvo pelo substituto", () => {
      // Arrange
      const texto = "banana";
      const alvo = "a";
      const substituto = "o";

      // Act
      const resultado = textoUtils.substituirTudo(texto, alvo, substituto);

      // Assert
      expect(resultado).toBe("bonono");
    });

    test("deve lancar erro quando o alvo for vazio", () => {
      // Arrange
      const texto = "banana";
      const alvo = "";
      const substituto = "o";

      // Act & Assert
      expect(() => textoUtils.substituirTudo(texto, alvo, substituto)).toThrow(
        "O alvo não pode ser vazio",
      );
    });
  });
});