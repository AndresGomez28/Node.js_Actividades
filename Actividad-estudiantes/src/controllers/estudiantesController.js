const Estudiantes = require('../models/estudiantesModel');

const estudiantesController = {
  //Obtener estudiantes
  getAllStudents: async (req, res) => {
    try {
      const estudiantes = await Estudiantes.find();
      res.json(estudiantes);
    } catch (err) {
      console.error("Error al obtener estudiantes:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //Consulta de estudiante por ID
  getStudentsById: async (req, res) => {
    const id = req.params.id;
    try {
      const estudianteId = await Estudiantes.findById(id);
      res.json(estudianteId);
    } catch (err) {
      console.error("Error al obtener estudiantes:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //Consulta de estudiante por Nombre
  getStudentByName: async (req, res) => {
    const { nombre } = req.params;
    try {
      const nombreEstudiante = await Estudiantes.findOne({ nombre: nombre });
      res.json(nombreEstudiante);
    } catch {
      console.error("Error al obtener estudiante:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // Crear un nuevo estudiante
  createStudent: async (req, res) => {
    const dataEstudiante = req.body;
    console.log(dataEstudiante);
    try {
      const nuevoEstudiante = new Profesores(dataEstudiante);
      const estudianteGuardado = await nuevoEstudiante.save();
      res.status(201).json(estudianteGuardado);
    } catch (error) {
      console.error("Error al crear estudiante:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // Actualizar un estudiante existente
  updateStudent: async (req, res) => {
    try {
      // const {estudianteid} = req.params;
      // const actualizarEstudiante = await Estudiantes.findByIdAndUpdate({estudianteid: estudianteid}, {$set: {nombre: 'Un Nombre Random}});
      const { nombre } = req.params;
      const actualizarEstudiante = await Estudiantes.findOneAndUpdate(
        { nombre: nombre },
        { $set: { nombre: "Julian" } }
      );
      res.json(actualizarEstudiante);
    } catch (error) {
      console.error("Error al actualizar estudiante:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // Eliminar un estudiante existente
  deleteStudent: async (req, res) => {
    try {
      // const {estudianteid} = req.params;
      // const borrarEstudiante = await Estudiantes.findOneAndDelete({estudianteid: profesorid});
      const { nombre } = req.params;
      const borrarEstudiante = await Estudiantes.findOneAndDelete({
        nombre: nombre,
      });
      res.json(borrarEstudiante);
    } catch (error) {
      console.error("Error al eliminar estudiante:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = estudiantesController;
